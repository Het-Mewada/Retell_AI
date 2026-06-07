import express from "express";
import Recruiter from "../models/recruiter.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {

        const recruiter = await Recruiter.create(req.body.args || req.body);

        res.status(201).json(recruiter);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.get("/", async (req, res) => {
    const recruiters = await Recruiter.find();

    res.json(recruiters);
});

export default router;