import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Calendar, Users, Ticket, BarChart2 } from "lucide-react";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `sidebar-link ${isActive ? "active" : ""}`;

  return (
    <div style={{ padding: 20, background: "#111214", color: "#fff", height: "100vh" }}>
      <h2 style={{ marginBottom: 20, fontSize: 20 }}>Admin Panel</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <NavLink to="/dashboard" className={linkClass}>
          <Home size={16} /> <span style={{ marginLeft: 8 }}>Dashboard</span>
        </NavLink>

        <NavLink to="/events" className={linkClass}>
          <Calendar size={16} /> <span style={{ marginLeft: 8 }}>Events</span>
        </NavLink>

        <NavLink to="/employees" className={linkClass}>
          <Users size={16} /> <span style={{ marginLeft: 8 }}>Employees</span>
        </NavLink>

        <NavLink to="/tasks" className={linkClass}>
          <Calendar size={16} /> <span style={{ marginLeft: 8 }}>Tasks</span>
        </NavLink>

        <NavLink to="/tickets" className={linkClass}>
          <Ticket size={16} /> <span style={{ marginLeft: 8 }}>Tickets</span>
        </NavLink>

        <NavLink to="/users" className={linkClass}>
          <Users size={16} /> <span style={{ marginLeft: 8 }}>Users</span>
        </NavLink>

        <NavLink to="/reports" className={linkClass}>
          <BarChart2 size={16} /> <span style={{ marginLeft: 8 }}>Reports</span>
        </NavLink>

        <NavLink to="/settings" className={linkClass}>
          <span style={{ marginLeft: 8 }}>Settings</span>
        </NavLink>
      </nav>

      <style>{`
        .sidebar-link {
          display:flex;
          align-items:center;
          gap:8px;
          padding:10px;
          border-radius:8px;
          color: #cbd5e1;
          text-decoration: none;
        }
        .sidebar-link.active {
          background: rgba(0,245,255,0.08);
          color: #00f5ff;
          box-shadow: 0 0 8px rgba(0,245,255,0.08);
        }
        .sidebar-link:hover {
          background: rgba(255,255,255,0.03);
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
