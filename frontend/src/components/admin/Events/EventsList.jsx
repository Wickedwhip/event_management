// src/components/admin/Events/EventsList.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const EventsList = () => {
  const navigate = useNavigate();

  const events = [
    { id: 1, title: "Tech Conference 2025", date: "2025-10-01", status: "Upcoming" },
    { id: 2, title: "Gaming Night", date: "2025-11-12", status: "Draft" },
  ];

  return (
    <div className="glass-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <h2>Events</h2>
        <button className="neon-btn" onClick={() => navigate("/admin/events/form")}>+ Add Event</button>
      </div>

      <div style={{ display: "grid", gap: 10 }}>
        {events.map(e => (
          <div key={e.id} style={{ display: "flex", justifyContent: "space-between", padding: 12, borderRadius: 8, background: "rgba(255,255,255,0.03)" }}>
            <div>
              <strong>{e.title}</strong>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{e.date} · {e.status}</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="neon-btn" onClick={() => alert("Preview not implemented - dummy")}>Preview</button>
              <button className="neon-btn" onClick={() => navigate("/admin/events/form")}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsList;
