// src/components/admin/Tasks/TaskForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [due, setDue] = useState("");
  const [status, setStatus] = useState("Pending");

  const save = (e) => {
    e.preventDefault();
    alert(`Saved task: ${title}`);
    navigate("/admin/tasks");
  };

  return (
    <div className="glass-card">
      <h2>{title ? "Edit Task" : "Add Task"}</h2>
      <form onSubmit={save} style={{ display: "grid", gap: 10 }}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task title" required />
        <input type="date" value={due} onChange={e => setDue(e.target.value)} />
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Complete</option>
        </select>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="neon-btn" type="submit">Save</button>
          <button className="neon-btn" type="button" onClick={() => navigate(-1)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
