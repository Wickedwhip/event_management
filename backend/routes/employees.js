import express from "express";
import Employee from "../models/Employee.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// Get one
router.get("/:id", async (req, res) => {
  const emp = await Employee.findById(req.params.id);
  if (!emp) return res.status(404).json({ msg: "Employee not found" });
  res.json(emp);
});

// Add
router.post("/", async (req, res) => {
  const newEmp = new Employee(req.body);
  const saved = await newEmp.save();
  res.json(saved);
});

// Update
router.put("/:id", async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

export default router;
