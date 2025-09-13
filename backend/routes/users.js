import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

// GET all users
router.get("/", async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

// GET one
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (!user) return res.status(404).json({ msg: "User not found" });
  res.json(user);
});

// POST (create user)
router.post("/", async (req, res) => {
  const { username, password, role } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hash, role });
  const saved = await user.save();
  res.json(saved);
});

// PUT
router.put("/:id", async (req, res) => {
  const { username, password, role } = req.body;
  const hash = password ? await bcrypt.hash(password, 10) : undefined;
  const updated = await User.findByIdAndUpdate(
    req.params.id,
    { username, ...(hash && { password: hash }), role },
    { new: true }
  ).select("-password");
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

export default router;
