import express from "express";
import { listTenders, getTenderDetails } from "../controllers/tenderController";
import { authenticateUser } from "../middleware/auth";

const router = express.Router();

router.get("/", authenticateUser, listTenders);
router.get("/:id", authenticateUser, getTenderDetails);

export default router;
