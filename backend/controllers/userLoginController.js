import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/userSchema.js";
import { body, validationResult } from "express-validator";
import rateLimit from "express-rate-limit";

// Rate limiter middleware
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many login attempts from this IP, please try again later.",
});

// Login Controller
export const loginUser = [
  // Input validation and sanitization
  body("email").isEmail().withMessage("Enter a valid email address"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),

  loginLimiter,

  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;

      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password." });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password." });
      }

      // Generate JWT Token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.status(200).json({ token, message: "Login successful" });
    } catch (error) {
      res.status(500).json({ message: "Error logging in", error: error.message });
    }
  }
];
