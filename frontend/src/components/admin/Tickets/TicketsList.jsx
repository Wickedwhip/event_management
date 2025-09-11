// src/components/admin/Tickets/TicketsList.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const TicketsList = () => {
  const navigate = useNavigate();
  const tickets = [
    { id: 1, name: "VIP Pass", status: "Sold" },
    { id: 2, name: "General", status: "Available" },
  ];

  return (
    <div className="glass-card">
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
        <h2>Tickets</h2>
        <button className="neon-btn" onClick={() => navigate("/admin/tickets/form")}>+ Add Ticket</button>
      </div>

      <div style={{ display: "grid", gap: 8 }}>
        {tickets.map(t => (
          <div key={t.id} style={{ padding: 12, borderRadius: 8, background: "rgba(255,255,255,0.03)", display:"flex", justifyContent:"space-between" }}>
            <div><strong>{t.name}</strong><div style={{ fontSize:13, color:"rgba(255,255,255,0.7)" }}>{t.status}</div></div>
            <div><button className="neon-btn" onClick={() => navigate("/admin/tickets/form")}>Edit</button></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketsList;
