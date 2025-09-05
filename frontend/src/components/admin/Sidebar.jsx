
import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, children }) => (
  <NavLink to={to} className={({isActive}) => `block px-4 py-3 rounded-lg mb-2 ${isActive ? "bg-indigo-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}>
    {children}
  </NavLink>
);

export default function Sidebar({ onLogout }) {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <div className="mb-6">
        <div className="text-xl font-extrabold text-indigo-600">HEXA Admin</div>
        <div className="text-sm text-gray-500">Event Management</div>
      </div>
      <nav>
        <NavItem to="/admin/events">Events</NavItem>
        <NavItem to="/admin/tickets">Tickets</NavItem>
        <NavItem to="/admin/employees">Employees</NavItem>
        <NavItem to="/admin/users">Users</NavItem>
        <NavItem to="/admin/reports">Reports</NavItem>
      </nav>
      <div className="mt-6">
        <button onClick={onLogout} className="w-full text-left px-4 py-2 text-sm rounded-lg bg-red-500 text-white">Logout</button>
      </div>
    </aside>
  );
}
