import mongoose from "mongoose";

const recruiterSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        company: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        phone: {
            type: String,
            required: true
        },

        role: {
            type: String,
            required: true
        },

        status: {
            type: String,
            enum: [
                "new",
                "interested",
                "interview_scheduled",
                "rejected",
                "completed"
            ],
            default: "new"
        },

        notes: {
            type: String,
            default: ""
        },

        interviewDate: {
            type: Date,
            default: null
        },

        callSummary: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model(
    "Recruiter",
    recruiterSchema
);