import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Calendar, Users, Ticket, BarChart2 } from "lucide-react";

const Sidebar = () => {
  const cls = ({ isActive }) =>
    `sidebar-link ${isActive ? "active" : ""}`;

  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <NavLink to="/dashboard" className={cls}><Home size={16}/> <span>Dashboard</span></NavLink>
        <NavLink to="/events" className={cls}><Calendar size={16}/> <span>Events</span></NavLink>
        <NavLink to="/employees" className={cls}><Users size={16}/> <span>Employees</span></NavLink>
        <NavLink to="/tasks" className={cls}><Calendar size={16}/> <span>Tasks</span></NavLink>
        <NavLink to="/tickets" className={cls}><Ticket size={16}/> <span>Tickets</span></NavLink>
        <NavLink to="/users" className={cls}><Users size={16}/> <span>Users</span></NavLink>
        <NavLink to="/reports" className={cls}><BarChart2 size={16}/> <span>Reports</span></NavLink>
        <NavLink to="/settings" className={cls}><span>Settings</span></NavLink>
      </nav>

      <style>{`
        .sidebar { padding:20px; background:#0f1115; height:100vh; color:#ddd; width:260px; box-shadow:4px 0 30px rgba(0,0,0,0.6);}
        .sidebar h2 { color:#fff; margin-bottom:12px }
        .sidebar nav { display:flex; flex-direction:column; gap:8px }
        .sidebar-link { display:flex; align-items:center; gap:8px; padding:10px; border-radius:8px; color:#bfc6cc; text-decoration:none; }
        .sidebar-link:hover { background:rgba(255,255,255,0.02); color:#fff; transform:translateX(4px); }
        .sidebar-link.active { color:#00f5ff; box-shadow:0 0 8px rgba(0,245,255,0.08); background:rgba(0,245,255,0.04) }
        .sidebar-link svg { flex-shrink:0 }
        .sidebar-title {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(90deg, #00eaff, #ff00cc);
          -webkit-backgroul-color: transparent;
          letter-spacing: 1px;nd-clip: text;
          -webkit-text-fil
            }

      `}</style>
    </div>
  );
};

export default Sidebar;
