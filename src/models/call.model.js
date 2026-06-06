import mongoose from "mongoose";

const callSchema = new mongoose.Schema(
    {
        callId: String,
        recruiterName: String,
        company: String,
        transcript: String,
        summary: String,
        duration: Number
    },
    {
        timestamps: true
    }
);

export default mongoose.model(
    "Call",
    callSchema
);