// src/components/admin/AdminLayout.jsx
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import HeaderBar from "./HeaderBar.jsx";
import Dashboard from "./Dashboard.jsx";

// admin sections (these files exist in your tree)
import EventsList from "./Events/EventsList.jsx";
import EventForm from "./Events/EventForm.jsx";
import EmployeesList from "./Employees/EmployeesList.jsx";
import EmployeeForm from "./Employees/EmployeeForm.jsx";
import TaskList from "./Tasks/TaskList.jsx";
import TaskForm from "./Tasks/TaskForm.jsx";
import TicketsList from "./Tickets/TicketsList.jsx";
import TicketForm from "./Tickets/TicketForm.jsx";
import UsersOverview from "./Users/UsersOverview.jsx";
import ReportsPage from "./Reports/ReportsPage.jsx";
import SettingsPage from "./Settings/SettingsPage.jsx";

import "../../styles/main.css";

const AdminLayout = ({ onLogout }) => {
  return (
    <div className="layout admin-layout">
      <Sidebar />
      <div className="main-column">
        <HeaderBar onLogout={onLogout} />
        <main className="content-area">
          {/* Render nested routes */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />

            {/* Events */}
            <Route path="events" element={<EventsList />} />
            <Route path="events/form" element={<EventForm />} />

            {/* Employees */}
            <Route path="employees" element={<EmployeesList />} />
            <Route path="employees/form" element={<EmployeeForm />} />

            {/* Tasks */}
            <Route path="tasks" element={<TaskList />} />
            <Route path="tasks/form" element={<TaskForm />} />

            {/* Tickets */}
            <Route path="tickets" element={<TicketsList />} />
            <Route path="tickets/form" element={<TicketForm />} />

            {/* Other admin pages */}
            <Route path="users" element={<UsersOverview />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Routes>

          {/* Keep Outlet in case other nested renders needed */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
