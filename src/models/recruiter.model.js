import mongoose from "mongoose";

const recruiterSchema = new mongoose.Schema(
    {
        name: String,
        company: String,
        email: String,
        phone: String,
        role: String
    },
    {
        timestamps: true
    }
);

export default mongoose.model(
    "Recruiter",
    recruiterSchema
);