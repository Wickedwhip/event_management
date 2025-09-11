// src/components/admin/Events/EventForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EventForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("Draft");

  const handleSave = (e) => {
    e.preventDefault();
    // dummy save
    alert(`Saved event: ${title} (${status})`);
    navigate("/admin/events");
  };

  return (
    <div className="glass-card">
      <h2>{title ? "Edit Event" : "Create Event"}</h2>
      <form onSubmit={handleSave} style={{ display: "grid", gap: 10 }}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
        <input value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" />
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option>Draft</option>
          <option>Published</option>
          <option>Coming Soon</option>
        </select>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="neon-btn" type="submit">Save</button>
          <button className="neon-btn" type="button" onClick={() => navigate(-1)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
