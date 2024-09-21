import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/userSchema.js";
import nodemailer from "nodemailer";

// Utility function to send email
const sendEmail = async (email, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail", // You can change this to your email provider
    auth: {
      user: process.env.EMAIL, // Email from which you will send
      pass: process.env.EMAIL_PASSWORD, // Your email password
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: subject,
    html: message,
  });
};

// Registration Controller
export const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, username, email, password, phone, role } =
      req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
      phone,
      role,
    });

    // Save user to the database
    await newUser.save();

    // Email Confirmation
    const emailMessage = `
      <h3>Welcome to our service, ${firstname}!</h3>
      <p>Please confirm your email by clicking the link below:</p>
      <a href="${process.env.FRONTEND_URL}/confirm-email/${newUser._id}">Confirm Email</a>
    `;

    await sendEmail(email, "Confirm your Email", emailMessage);

    res.status(201).json({
      message:
        "User registered successfully. Please check your email to confirm.",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
}

// Forgot Password Controller
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User with that email does not exist." });
    }

    // Create reset token
    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send reset password email
    const resetMessage = `
      <h3>Password Reset</h3>
      <p>To reset your password, click the link below:</p>
      <a href="${process.env.FRONTEND_URL}/reset-password/${resetToken}">Reset Password</a>
    `;
    await sendEmail(email, "Reset your password", resetMessage);

    res
      .status(200)
      .json({ message: "Password reset link sent to your email." });
  } catch (error) {
    res.status(500).json({
      message: "Error sending password reset email",
      error: error.message,
    });
  }
};

// Email Confirmation Controller
export const confirmEmail = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "Invalid confirmation link." });
    }

    // Mark the user as confirmed
    user.isConfirmed = true;
    await user.save();

    res.status(200).json({ message: "Email confirmed successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error confirming email", error: error.message });
  }
};
