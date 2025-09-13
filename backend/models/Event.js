import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String },
  description: { type: String },
  status: { type: String, enum: ["Draft", "Published", "Coming Soon"], default: "Draft" }
}, { timestamps: true });

export default mongoose.model("Event", eventSchema);
