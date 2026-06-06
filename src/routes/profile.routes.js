import express from "express";
import profile from "../services/profile.service.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json(profile);
});

export default router;