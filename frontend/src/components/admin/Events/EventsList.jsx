import React from "react";
import { Link } from "react-router-dom";

const EventsList = () => {
  // Dummy table data — replace with real data later
  const rows = [
    { id: 1, title: "Tech Summit 2025", date: "2025-04-10", status: "Published" },
    { id: 2, title: "Sportbike Rally", date: "2025-06-02", status: "Draft" },
  ];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h1 style={{ margin: 0 }}>Events</h1>
        <div style={{ display: "flex", gap: 8 }}>
          <Link to="/events/new" style={addBtnStyle}>+ Add Event</Link>
          <Link to="/events" style={ghostBtnStyle}>Refresh</Link>
        </div>
      </div>

      <div style={panelStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <th style={{ padding: "12px 8px" }}>Title</th>
              <th style={{ padding: "12px 8px" }}>Date</th>
              <th style={{ padding: "12px 8px" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                <td style={{ padding: "12px 8px" }}>{r.title}</td>
                <td style={{ padding: "12px 8px" }}>{r.date}</td>
                <td style={{ padding: "12px 8px" }}>{r.status}</td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr><td colSpan={3} style={{ padding: 12 }}>No events yet.</td></tr>
            )}
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

const ghostBtnStyle = {
  background: "transparent",
  color: "#cbd5e1",
  padding: "8px 12px",
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.04)",
  textDecoration: "none"
};

export default EventsList;
