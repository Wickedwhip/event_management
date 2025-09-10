import { useState } from "react";
import Sidebar from "./Sidebar";
import HeaderBar from "./HeaderBar";

const AdminLayout = ({ children, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen relative">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-gray-800 w-64 transform transition-transform duration-300 z-50
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar />
      </div>

      {/* Overlay for small screens */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex flex-col flex-1 ml-0 md:ml-64 transition-all duration-300">
        <HeaderBar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} onLogout={onLogout} />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-900">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
