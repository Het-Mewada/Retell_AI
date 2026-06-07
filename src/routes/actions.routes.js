import express from "express";
import Recruiter from "../models/recruiter.model.js";
import sendEmail from "../services/email.service.js";
import Call from "../models/call.model.js";

const router = express.Router();

router.post(
    "/save-summary",
    async (req, res) => {
        try {

            const data =
                req.body.args || req.body;

            const call =
                await Call.create({
                    callId: data.callId,

                    recruiterName:
                        data.recruiterName,

                    company:
                        data.company,

                    role:
                        data.role,

                    transcript:
                        data.transcript,

                    summary:
                        data.summary,

                    outcome:
                        data.outcome,

                    duration:
                        data.duration
                });
            console.log('Transcript: ', data.transcript);
            await sendEmail(
                "📞 New Recruiter Call",
                `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden;">    
                    <div style="background: #2563eb; color: white; padding: 20px;">
                    <h2 style="margin: 0;">New Recruiter Call Received</h2>
                    </div>

                    <div style="padding: 20px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                        <td style="padding: 10px; font-weight: bold;">Recruiter</td>
                        <td style="padding: 10px;">${data.recruiterName}</td>
                        </tr>
                        <tr style="background: #f9fafb;">
                        <td style="padding: 10px; font-weight: bold;">Company</td>
                        <td style="padding: 10px;">${data.company}</td>
                        </tr>
                        <tr>
                        <td style="padding: 10px; font-weight: bold;">Role</td>
                        <td style="padding: 10px;">${data.role}</td>
                        </tr>
                        <tr style="background: #f9fafb;">
                        <td style="padding: 10px; font-weight: bold;">Outcome</td>
                        <td style="padding: 10px;">${data.outcome}</td>
                        </tr>
                        <tr>
                        <td style="padding: 10px; font-weight: bold;">Duration</td>
                        <td style="padding: 10px;">${data.duration}</td>
                        </tr>
                    </table>

                    <div style="margin-top: 20px;">
                        <h3 style="margin-bottom: 10px;">Call Summary</h3>
                        <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; line-height: 1.6;">
                        ${data.summary}
                        </div>
                    </div>
                    </div>

                    <div style="background: #f9fafb; text-align: center; padding: 12px; color: #6b7280; font-size: 12px;">
                    AI Recruiter Notification
                    </div>

                </div>`
            );

            res.json({
                success: true,
                call
            });

        } catch (error) {

            console.log(error);

            res.status(500).json({
                success: false,
                message: error.message
            });

        }
    }
);

router.post("/update-summary", async (req, res) => {

    try {

        const {
            recruiterId,
            summary
        } = req.body;

        const recruiter =
            await Recruiter.findByIdAndUpdate(
                recruiterId,
                {
                    callSummary: summary
                },
                {
                    new: true
                }
            );

        res.json({
            success: true,
            recruiter
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});


router.post("/schedule-interview", async (req, res) => {
    try {
        const {
            email,
            companyName,
            interviewDate
        } = req.body.args || req.body;

        if (!email || !companyName || !interviewDate) {
            return res.status(400).json({
                success: false,
                message: "email, companyName and interviewDate are required"
            });
        }

        const recruiter = await Recruiter.findOneAndUpdate(
            {
                email: email.trim().toLowerCase(),
                companyName: companyName.trim()
            },
            {
                status: "interview_scheduled",
                interviewDate
            },
            {
                new: true
            }
        );

        if (!recruiter) {
            return res.status(404).json({
                success: false,
                message: "Recruiter not found"
            });
        }

        res.json({
            success: true,
            recruiter
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

export default router;