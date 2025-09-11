import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Calendar, Users, CheckSquare, User } from "lucide-react";

const EmployeeSidebar = () => {
  const cls = ({ isActive }) =>
    `sidebar-link ${isActive ? "active" : ""}`;

  return (
    <div className="employee-sidebar">
      <h2 className="sidebar-title">Employee Panel</h2>
      <nav>
        <NavLink to="/employee/dashboard" className={cls}>
          <Home size={16}/> <span>Dashboard</span>
        </NavLink>

        <NavLink to="/employee/events" className={cls}>
          <Calendar size={16}/> <span>Events</span>
        </NavLink>
        <NavLink to="/employee/tasks" className={cls}>
          <CheckSquare size={16}/> <span>Tasks</span>
        </NavLink>
        <NavLink to="/employee/profile" className={cls}>
          <User size={16}/> <span>Profile</span>
        </NavLink>
      </nav>

      <style>{`
        .employee-sidebar { padding:20px; background:#0f1115; height:100vh; color:#ddd; width:260px; box-shadow:4px 0 30px rgba(0,0,0,0.6);}
        .employee-sidebar h2 { color:#fff; margin-bottom:12px; font-size:1.5rem; font-weight:bold; background: linear-gradient(90deg,#00eaff,#ff00cc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .employee-sidebar nav { display:flex; flex-direction:column; gap:8px }
        .sidebar-link { display:flex; align-items:center; gap:8px; padding:10px; border-radius:8px; color:#bfc6cc; text-decoration:none; }
        .sidebar-link:hover { background:rgba(255,255,255,0.02); color:#fff; transform:translateX(4px); }
        .sidebar-link.active { color:#00f5ff; box-shadow:0 0 8px rgba(0,245,255,0.08); background:rgba(0,245,255,0.04) }
        .sidebar-link svg { flex-shrink:0 }
      `}</style>
    </div>
  );
};

export default EmployeeSidebar;
