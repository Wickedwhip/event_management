import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import HeaderBar from "./HeaderBar";

import Dashboard from "./Dashboard";
import EventsList from "./Events/EventsList";
import EventForm from "./Events/EventForm";
import EmployeesList from "./Employees/EmployeesList";
import EmployeeForm from "./Employees/EmployeeForm";
import TasksList from "./Tasks/TaskList";
import TaskForm from "./Tasks/TaskForm";
import TicketsList from "./Tickets/TicketsList";
import TicketForm from "./Tickets/TicketForm";
import UsersOverview from "./Users/UsersOverview";
import ReportsPage from "./Reports/ReportsPage";
import SettingsPage from "./Settings/SettingsPage";

import "./AdminLayout.css"; // make sure this file exists!

const AdminLayout = ({ onLogout }) => {
  return (
    <Router>
      <div className="admin-layout">
        <Sidebar />
        <div className="main-section">
          <HeaderBar onLogout={onLogout} />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Events */}
              <Route path="/events" element={<EventsList />} />
              <Route path="/events/new" element={<EventForm />} />

              {/* Employees */}
              <Route path="/employees" element={<EmployeesList />} />
              <Route path="/employees/new" element={<EmployeeForm />} />

              {/* Tasks */}
              <Route path="/tasks" element={<TasksList />} />
              <Route path="/tasks/new" element={<TaskForm />} />

              {/* Tickets */}
              <Route path="/tickets" element={<TicketsList />} />
              <Route path="/tickets/new" element={<TicketForm />} />

              {/* Other */}
              <Route path="/users" element={<UsersOverview />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AdminLayout;
