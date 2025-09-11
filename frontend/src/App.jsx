import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Admin
import AdminLayout from "./components/admin/AdminLayout.jsx";
import AdminDashboard from "./components/admin/Dashboard.jsx";
import EmployeesList from "./components/admin/Employees/EmployeesList.jsx";
import EventsList from "./components/admin/Events/EventsList.jsx";
import TasksList from "./components/admin/Tasks/TaskList.jsx";
import TicketsList from "./components/admin/Tickets/TicketsList.jsx";
import UsersOverview from "./components/admin/Users/UsersOverview.jsx";
import ReportsPage from "./components/admin/Reports/ReportsPage.jsx";
import SettingsPage from "./components/admin/Settings/SettingsPage.jsx";

// Employee
import EmployeeLayout from "./components/employee/EmployeeLayout.jsx";
import EmployeeDashboard from "./components/employee/EmployeeDashboard.jsx";
import EmployeeTaskList from "./components/employee/Tasks/TaskList.jsx";
import EmployeeEventList from "./components/employee/Events/EventList.jsx";
import ProfilePage from "./components/employee/Profile/ProfilePage.jsx";

// Login
import LoginPage from "./components/admin/LoginPage.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null); // 'admin' | 'employee' | null

  const handleLogin = (selectedRole) => {
    setRole(selectedRole);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole(null);
  };

  return (
    <Router>
      <Routes>
        {/* Public / Login */}
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to={`/${role}/dashboard`} replace /> : <LoginPage onLogin={handleLogin} />
          }
        />

        {/* Admin routes */}
        {isLoggedIn && role === "admin" && (
          <Route path="/admin" element={<AdminLayout onLogout={handleLogout} />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="employees" element={<EmployeesList />} />
            <Route path="events" element={<EventsList />} />
            <Route path="events/new" element={<EventsList />} /> {/* or your EventForm */}
            <Route path="tasks" element={<TasksList />} />
            <Route path="tickets" element={<TicketsList />} />
            <Route path="users" element={<UsersOverview />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="dashboard" replace />} />
          </Route>
        )}

        {/* Employee routes */}
        {isLoggedIn && role === "employee" && (
          <Route path="/employee" element={<EmployeeLayout onLogout={handleLogout} />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<EmployeeDashboard />} />
            <Route path="tasks" element={<EmployeeTaskList />} />
            <Route path="events" element={<EmployeeEventList />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="dashboard" replace />} />
          </Route>
        )}

        {/* Fallback: if user types something invalid */}
        <Route path="*" element={<Navigate to={isLoggedIn ? `/${role}/dashboard` : "/"} replace />} />
      </Routes>
    </Router>
  );
}

export default App;
