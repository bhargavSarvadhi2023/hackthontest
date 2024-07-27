import express from "express";
import {
  getBidList,
  getBidWinner,
  submitBid,
} from "../controllers/bidController";
import authenticate from "../middleware/auth";
// import { authenticateUser } from '../middlewares/auth';

const router = express.Router();

router.post(
  "/",
  authenticate.authenticateUser,
  authenticate.authorizeRoles("user", "admin"),
  submitBid
);
router.post(
  "/winner-add",
  authenticate.authenticateUser,
  authenticate.authorizeRoles("admin"),
  getBidWinner
);
router.get(
  "/list",
  authenticate.authenticateUser,
  authenticate.authorizeRoles("admin"),
  getBidList
);

export default router;
