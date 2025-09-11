// src/components/admin/Tasks/TaskList.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const navigate = useNavigate();
  const tasks = [
    { id: 1, title: "Prepare Slides", status: "Pending" },
    { id: 2, title: "Follow-up Emails", status: "In Progress" },
  ];

  return (
    <div className="glass-card">
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
        <h2>Tasks</h2>
        <button className="neon-btn" onClick={() => navigate("/admin/tasks/form")}>+ Add Task</button>
      </div>

      <div style={{ display: "grid", gap: 8 }}>
        {tasks.map(t => (
          <div key={t.id} style={{ display: "flex", justifyContent: "space-between", padding: 12, borderRadius: 8, background: "rgba(255,255,255,0.03)" }}>
            <div>
              <strong>{t.title}</strong>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{t.status}</div>
            </div>
            <div>
              <button className="neon-btn" onClick={() => navigate("/admin/tasks/form")}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
