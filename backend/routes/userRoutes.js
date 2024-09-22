import express from "express";
import {
  getAllUsers,
  createNewUser,
  testDBConnect,
} from "../controllers/userController.js";

import {
  registerUser,
  forgotPassword,
  confirmEmail,
} from "../controllers/userAuthController.js";
import { loginUser } from "../controllers/userLoginController.js"; 

const router = express.Router();

//All routes for /users go through here
router.get("/", getAllUsers);
router.post("/", createNewUser);
router.get("/test", testDBConnect);

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/forgot-password", forgotPassword);
router.get("/confirm-email/:userId", confirmEmail);

export default router;
