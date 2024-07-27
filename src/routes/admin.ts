import express from "express";
import { getTenderApplicants } from "../controllers/adminController";
import authenticate from "../middleware/auth";

const router = express.Router();

router.get(
  "/tenders/:id/applicants",
  authenticate.authenticateUser,
  authenticate.authorizeRoles("admin"),
  getTenderApplicants
);

export default router;
