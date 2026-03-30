import express from "express";
import { checkATS } from "../controllers/atsController.js";
import { checkATSAccess } from "../middleware/atsLimiter.js";

const router = express.Router();

router.post("/check", checkATSAccess, checkATS);

export default router;