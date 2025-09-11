// src/components/employee/Events/EventList.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const EventList = () => {
  const navigate = useNavigate();
  const events = [
    { id: 1, title: "Quarterly Meeting", date: "2025-09-20" },
    { id: 2, title: "Client Call", date: "2025-09-22" },
  ];

  return (
    <div className="glass-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Events</h2>
        <button className="neon-btn" onClick={() => navigate("/employee/events/form")}>+ Add Event</button>
      </div>

      <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
        {events.map(ev => (
          <div key={ev.id} style={{ padding: 12, borderRadius: 8, background: "rgba(255,255,255,0.03)", display: "flex", justifyContent: "space-between" }}>
            <div><strong>{ev.title}</strong><div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{ev.date}</div></div>
            <div><button className="neon-btn" onClick={() => navigate("/employee/events/form")}>Edit</button></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
