// src/components/employee/EmployeeLayout.jsx
import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import EmployeeSidebar from "./EmployeeSidebar.jsx";
import EmployeeHeaderBar from "../EmployeeHeaderBar.jsx";
import EmployeeDashboard from "./EmployeeDashboard.jsx";

// employee pairs
import EventList from "./Events/EventList.jsx";
import EventForm from "./Events/EventForm.jsx";
import TaskList from "./Tasks/TaskList.jsx";
import TaskForm from "./Tasks/TaskForm.jsx";
import ProfilePage from "./Profile/ProfilePage.jsx";

import "./employee.css";

const EmployeeLayout = ({ onLogout }) => {
  return (
    <div className="employee-layout">
      <EmployeeSidebar />
      <div className="employee-main">
        <EmployeeHeaderBar onLogout={onLogout} />
        <main className="employee-content">
          <Routes>
            <Route path="/" element={<EmployeeDashboard />} />
            <Route path="dashboard" element={<EmployeeDashboard />} />

            {/* Events */}
            <Route path="events" element={<EventList />} />
            <Route path="events/form" element={<EventForm />} />

            {/* Tasks */}
            <Route path="tasks" element={<TaskList />} />
            <Route path="tasks/form" element={<TaskForm />} />

            <Route path="profile" element={<ProfilePage />} />
          </Routes>

          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default EmployeeLayout;
