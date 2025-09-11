import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import HeaderBar from "./HeaderBar";

import Dashboard from "./Dashboard";
import EmployeesList from "./Employees/EmployeesList";
import EventsList from "./Events/EventsList";
import TasksList from "./Tasks/TaskList";
import TicketsList from "./Tickets/TicketsList";
import UsersOverview from "./Users/UsersOverview";
import ReportsPage from "./Reports/ReportsPage";
import SettingsPage from "./Settings/SettingsPage";

import "./AdminLayout.css"; // ✅ correct

const AdminLayout = ({ onLogout }) => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="main-section">
        <HeaderBar onLogout={onLogout} />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="employees" element={<EmployeesList />} />
            <Route path="events" element={<EventsList />} />
            <Route path="tasks" element={<TasksList />} />
            <Route path="tickets" element={<TicketsList />} />
            <Route path="users" element={<UsersOverview />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="dashboard" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
