import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import AdminLayout from "./components/admin/AdminLayout";
import LoginPage from "./components/admin/LoginPage";
import Dashboard from "./components/admin/Dashboard";
import EventsList from "./components/admin/Events/EventsList";
import EmployeesList from "./components/admin/Employees/EmployeesList";
import TicketsList from "./components/admin/Tickets/TicketsList";
import UsersOverview from "./components/admin/Users/UsersOverview";
import ReportsPage from "./components/admin/Reports/ReportsPage";
import TasksList from "./components/admin/Tasks/TasksList"; // <-- new import
import SettingsPage from "./components/admin/Settings/SettingsPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Login page */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <LoginPage onLogin={() => setIsLoggedIn(true)} />
            )
          }
        />

        {/* Admin layout and routes */}
        {isLoggedIn && (
          <Route
            path="/*"
            element={
              <AdminLayout onLogout={() => setIsLoggedIn(false)}>
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="events" element={<EventsList />} />
                  <Route path="employees" element={<EmployeesList />} />
                  <Route path="tickets" element={<TicketsList />} />
                  <Route path="users" element={<UsersOverview />} />
                  <Route path="reports" element={<ReportsPage />} />
                  <Route path="tasks" element={<TasksList />} />
                  <Route path="settings" element={<SettingsPage />} />

                  {/* Redirect unknown paths */}
                  <Route path="*" element={<Navigate to="dashboard" replace />} />
                </Routes>
              </AdminLayout>
            }
          />
        )}
      </Routes>
    </Router>
  );
}

export default App;
