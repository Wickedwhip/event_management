import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

// GET all
router.get("/", async (req, res) => {
  const tasks = await Task.find().populate("assignedTo");
  res.json(tasks);
});

// GET one
router.get("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id).populate("assignedTo");
  if (!task) return res.status(404).json({ msg: "Task not found" });
  res.json(task);
});

// POST
router.post("/", async (req, res) => {
  const newTask = new Task(req.body);
  const saved = await newTask.save();
  res.json(saved);
});

// PUT
router.put("/:id", async (req, res) => {
  const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

export default router;
