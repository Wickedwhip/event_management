import React from "react";
import { Link } from "react-router-dom";

const TicketsList = () => {
  const rows = [
    { id: 1, title: "VIP Pass", price: "$150", status: "Available" },
    { id: 2, title: "General", price: "$50", status: "Sold Out" },
  ];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h1 style={{ margin: 0 }}>Tickets</h1>
        <Link to="/tickets/new" style={addBtnStyle}>+ Add Ticket</Link>
      </div>

      <div style={panelStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <th style={{ padding: "12px 8px" }}>Title</th>
              <th style={{ padding: "12px 8px" }}>Price</th>
              <th style={{ padding: "12px 8px" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                <td style={{ padding: "12px 8px" }}>{r.title}</td>
                <td style={{ padding: "12px 8px" }}>{r.price}</td>
                <td style={{ padding: "12px 8px" }}>{r.status}</td>
              </tr>
            ))}
            {rows.length === 0 && <tr><td colSpan={3} style={{ padding: 12 }}>No tickets yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const panelStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  padding: 16,
  borderRadius: 12,
};
const addBtnStyle = {
  background: "#00f5ff",
  color: "#041014",
  padding: "8px 12px",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: 700,
};

export default TicketsList;
