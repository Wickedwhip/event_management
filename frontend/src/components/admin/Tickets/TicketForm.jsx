// src/components/admin/Tickets/TicketForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TicketForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const save = (e) => {
    e.preventDefault();
    alert(`Saved ticket: ${name}`);
    navigate("/admin/tickets");
  };

  return (
    <div className="glass-card">
      <h2>{name ? "Edit Ticket" : "Add Ticket"}</h2>
      <form onSubmit={save} style={{ display: "grid", gap: 10 }}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Ticket name" required />
        <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
        <div style={{ display: "flex", gap: 8 }}>
          <button className="neon-btn" type="submit">Save</button>
          <button className="neon-btn" type="button" onClick={() => navigate(-1)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
