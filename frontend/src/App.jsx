import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "./components/admin/AdminLayout";
import LoginPage from "./components/admin/LoginPage";

import Dashboard from "./components/admin/Dashboard";

// Lists
import EventsList from "./components/admin/Events/EventsList";
import EmployeesList from "./components/admin/Employees/EmployeesList";
import TaskList from "./components/admin/Tasks/TaskList";
import TicketsList from "./components/admin/Tickets/TicketsList";

// Forms (you already have these files)
import EventForm from "./components/admin/Events/EventForm";
import EmployeeForm from "./components/admin/Employees/EmployeeForm";
import TaskForm from "./components/admin/Tasks/TaskForm";
import TicketForm from "./components/admin/Tickets/TicketForm";

import UsersOverview from "./components/admin/Users/UsersOverview";
import ReportsPage from "./components/admin/Reports/ReportsPage";
import SettingsPage from "./components/admin/Settings/SettingsPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Login page (root) */}
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/dashboard" replace /> : <LoginPage onLogin={() => setIsLoggedIn(true)} />
          }
        />

        {/* Admin layout (always mounted). Child routes render into Outlet.
            Each child guards with isLoggedIn so direct URLs redirect to login if not authenticated. */}
        <Route path="/" element={<AdminLayout onLogout={() => setIsLoggedIn(false)} />}>
          <Route
            index
            element={isLoggedIn ? <Navigate to="dashboard" replace /> : <Navigate to="/" replace />}
          />

          <Route
            path="dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/" replace />}
          />

          {/* Events */}
          <Route
            path="events"
            element={isLoggedIn ? <EventsList /> : <Navigate to="/" replace />}
          />
          <Route
            path="events/new"
            element={isLoggedIn ? <EventForm /> : <Navigate to="/" replace />}
          />

          {/* Employees */}
          <Route
            path="employees"
            element={isLoggedIn ? <EmployeesList /> : <Navigate to="/" replace />}
          />
          <Route
            path="employees/new"
            element={isLoggedIn ? <EmployeeForm /> : <Navigate to="/" replace />}
          />

          {/* Tasks */}
          <Route
            path="tasks"
            element={isLoggedIn ? <TaskList /> : <Navigate to="/" replace />}
          />
          <Route
            path="tasks/new"
            element={isLoggedIn ? <TaskForm /> : <Navigate to="/" replace />}
          />

          {/* Tickets */}
          <Route
            path="tickets"
            element={isLoggedIn ? <TicketsList /> : <Navigate to="/" replace />}
          />
          <Route
            path="tickets/new"
            element={isLoggedIn ? <TicketForm /> : <Navigate to="/" replace />}
          />

          {/* Users, Reports, Settings */}
          <Route path="users" element={isLoggedIn ? <UsersOverview /> : <Navigate to="/" replace />} />
          <Route path="reports" element={isLoggedIn ? <ReportsPage /> : <Navigate to="/" replace />} />
          <Route path="settings" element={isLoggedIn ? <SettingsPage /> : <Navigate to="/" replace />} />

          {/* fallback */}
          <Route path="*" element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
