import express from "express";
import {
  listTenders,
  getTenderDetails,
  getuserDetails,
} from "../controllers/tenderController";
import authenticate from "../middleware/auth";

const router = express.Router();

router.get(
  "/",
  authenticate.authenticateUser,
  authenticate.authorizeRoles("user", "admin"),
  listTenders
);
router.get(
  "/:id",
  authenticate.authenticateUser,
  authenticate.authorizeRoles("user", "admin"),
  getTenderDetails
);

export default router;
