import express from "express";
import Recruiter from "../models/recruiter.model.js";
import sendEmail from "../services/email.service.js";
const router = express.Router();

router.post("/save-recruiter", async (req, res) => {
    try {
        const recruiter = await Recruiter.create({
            name: req.body.name,
            company: req.body.company,
            email: req.body.email,
            phone: req.body.phone,
            role: req.body.role
        });

        res.status(200).json({
            success: true,
            recruiter
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});


router.post(
    "/send-summary",
    async (req, res) => {

        try {

            const {
                company,
                recruiter,
                role,
                summary
            } = req.body;

            await sendEmail(
                "New Recruiter Call",
                `
Recruiter: ${recruiter}

Company: ${company}

Role: ${role}

Summary:
${summary}
                `
            );

            res.json({
                success: true
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }
    }
);

export default router;