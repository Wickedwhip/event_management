import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ["Open", "In Progress", "Closed"], default: "Open" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  priority: { type: String, enum: ["Low", "Medium", "High"], default: "Medium" }
}, { timestamps: true });

export default mongoose.model("Ticket", ticketSchema);
