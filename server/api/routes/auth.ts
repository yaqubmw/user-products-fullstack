import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User";

const router = express.Router();

// register a new user
router.post("/register", async (req, res) => {
  const { name, email, password, gender } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, gender });
    await user.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// login a user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "User logged in successfully!", token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// logout a user
router.get("/logout", (req, res) => {
  res.status(200).json({ message: "User logged out successfully!" });
});

export default router;
