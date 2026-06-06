import "./src/config/env.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import recruiterRoutes from "./src/routes/recruiter.routes.js";
import callRoutes from "./src/routes/call.routes.js";
import profileRoutes from "./src/routes/profile.routes.js";
import actionRoutes from "./src/routes/actions.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "AI Recruiter Agent Running"
    });
});

app.use("/api/recruiters", recruiterRoutes);
app.use("/api/calls", callRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/actions", actionRoutes);

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");

        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });