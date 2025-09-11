// src/components/admin/Employees/EmployeeForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    alert(`Saved employee: ${name} (${role})`);
    navigate("/admin/employees");
  };

  return (
    <div className="glass-card">
      <h2>{name ? "Edit Employee" : "Add Employee"}</h2>
      <form onSubmit={handleSave} style={{ display: "grid", gap: 10 }}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name" required />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <input value={role} onChange={e => setRole(e.target.value)} placeholder="Role" />
        <div style={{ display: "flex", gap: 8 }}>
          <button className="neon-btn" type="submit">Save</button>
          <button className="neon-btn" type="button" onClick={() => navigate(-1)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
