import React from "react";
import { Link } from "react-router-dom";

const EmployeesList = () => {
  const rows = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Manager", status: "Active" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Staff", status: "Inactive" },
  ];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h1 style={{ margin: 0 }}>Employees</h1>
        <Link to="/employees/new" style={addBtnStyle}>+ Add Employee</Link>
      </div>

      <div style={panelStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <th style={{ padding: "12px 8px" }}>Name</th>
              <th style={{ padding: "12px 8px" }}>Email</th>
              <th style={{ padding: "12px 8px" }}>Role</th>
              <th style={{ padding: "12px 8px" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                <td style={{ padding: "12px 8px" }}>{r.name}</td>
                <td style={{ padding: "12px 8px" }}>{r.email}</td>
                <td style={{ padding: "12px 8px" }}>{r.role}</td>
                <td style={{ padding: "12px 8px" }}>{r.status}</td>
              </tr>
            ))}
            {rows.length === 0 && <tr><td colSpan={4} style={{ padding: 12 }}>No employees yet.</td></tr>}
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

export default EmployeesList;
