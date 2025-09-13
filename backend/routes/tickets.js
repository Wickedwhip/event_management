import express from "express";
import Ticket from "../models/Ticket.js";

const router = express.Router();

// GET all
router.get("/", async (req, res) => {
  const tickets = await Ticket.find().populate("assignedTo");
  res.json(tickets);
});

// GET one
router.get("/:id", async (req, res) => {
  const ticket = await Ticket.findById(req.params.id).populate("assignedTo");
  if (!ticket) return res.status(404).json({ msg: "Ticket not found" });
  res.json(ticket);
});

// POST
router.post("/", async (req, res) => {
  const newTicket = new Ticket(req.body);
  const saved = await newTicket.save();
  res.json(saved);
});

// PUT
router.put("/:id", async (req, res) => {
  const updated = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Ticket.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

export default router;
