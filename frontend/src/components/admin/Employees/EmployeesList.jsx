// src/components/admin/Employees/EmployeesList.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeesList = () => {
  const navigate = useNavigate();

  const employees = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Manager" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Support" },
  ];

  return (
    <div className="glass-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <h2>Employees</h2>
        <button className="neon-btn" onClick={() => navigate("/admin/employees/form")}>+ Add Employee</button>
      </div>

      <div style={{ display: "grid", gap: 8 }}>
        {employees.map(emp => (
          <div key={emp.id} style={{ display: "flex", justifyContent: "space-between", padding: 12, borderRadius: 8, background: "rgba(255,255,255,0.03)" }}>
            <div>
              <strong>{emp.name}</strong>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{emp.email} · {emp.role}</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="neon-btn" onClick={() => navigate("/admin/employees/form")}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeesList;
