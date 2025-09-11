import { Outlet } from "react-router-dom";
import { useState } from "react";
import EmployeeHeaderBar from "../EmployeeHeaderBar";
import EmployeeSidebar from "./EmployeeSidebar";
import "./employee.css";

const EmployeeLayout = ({ onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="employee-layout">
      {/* Sidebar */}
      <div className={`sidebar-wrapper ${sidebarOpen ? "open" : ""}`}>
        <EmployeeSidebar />
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <div className={`employee-main ${sidebarOpen ? "shifted" : ""}`}>
        <EmployeeHeaderBar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} onLogout={onLogout} />
        <main>
          <Outlet /> {/* Nested pages like Dashboard, Tasks, Events */}
        </main>
      </div>
    </div>
  );
};

export default EmployeeLayout;
