import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

// Admin imports
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./components/admin/Dashboard";
import EmployeesList from "./components/admin/Employees/EmployeesList";
import EventsList from "./components/admin/Events/EventsList";
import TasksList from "./components/admin/Tasks/TaskList";
import TicketsList from "./components/admin/Tickets/TicketsList";
import UsersOverview from "./components/admin/Users/UsersOverview";
import ReportsPage from "./components/admin/Reports/ReportsPage";
import SettingsPage from "./components/admin/Settings/SettingsPage";

// Employee imports
import EmployeeLayout from "./components/employee/EmployeeLayout";
import EmployeeDashboard from "./components/employee/EmployeeDashboard";
import EmployeeTaskList from "./components/employee/Tasks/TaskList";
import EmployeeEventList from "./components/employee/Events/EventList";
import ProfilePage from "./components/employee/Profile/ProfilePage";

// Login
import LoginPage from "./components/admin/LoginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null); // "admin" or "employee"

  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to={`/${userType}`} replace />
            ) : (
              <LoginPage
                onLogin={(type) => {
                  setIsLoggedIn(true);
                  setUserType(type);
                }}
              />
            )
          }
        />

        {/* Admin routes */}
        {isLoggedIn && userType === "admin" && (
          <Route path="/admin" element={<AdminLayout onLogout={() => setIsLoggedIn(false)} />}>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="employees" element={<EmployeesList />} />
            <Route path="events" element={<EventsList />} />
            <Route path="tasks" element={<TasksList />} />
            <Route path="tickets" element={<TicketsList />} />
            <Route path="users" element={<UsersOverview />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="dashboard" replace />} />
          </Route>
        )}

        {/* Employee routes */}
        {isLoggedIn && userType === "employee" && (
          <Route path="/employee" element={<EmployeeLayout onLogout={() => setIsLoggedIn(false)} />}>
            {/* Render dashboard directly inside Outlet */}
            <Route index element={<EmployeeDashboard />} />
            <Route path="tasks" element={<EmployeeTaskList />} />
            <Route path="events" element={<EmployeeEventList />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="" replace />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
