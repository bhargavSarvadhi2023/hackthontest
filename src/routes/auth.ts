import express from "express";
import { register, login } from "../controllers/authController";
import { getuserDetails } from "../controllers/tenderController";
import authenticate from "../middleware/auth";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get(
  "/users",
  authenticate.authenticateUser,
  authenticate.authorizeRoles("admin"),
  getuserDetails
);

export default router;
