import express from "express";
import Call from "../models/call.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const call = await Call.create(req.body);

        res.status(201).json(call);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.get("/", async (req, res) => {
    const calls = await Call.find();

    res.json(calls);
});

export default router;