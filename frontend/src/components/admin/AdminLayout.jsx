
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import HeaderBar from "./HeaderBar";
import EventsList from "./Events/EventsList";
import TicketsList from "./Tickets/TicketsList";
import EmployeesList from "./Employees/EmployeesList";
import UsersOverview from "./Users/UsersOverview";
import ReportsPage from "./Reports/ReportsPage";

export default function AdminLayout({ onLogout }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar onLogout={onLogout} />
      <div className="flex-1">
        <HeaderBar onLogout={onLogout} />
        <main className="p-6">
          <Routes>
            <Route path="/" element={<EventsList />} />
            <Route path="events" element={<EventsList />} />
            <Route path="tickets" element={<TicketsList />} />
            <Route path="employees" element={<EmployeesList />} />
            <Route path="users" element={<UsersOverview />} />
            <Route path="reports" element={<ReportsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
