import Sidebar from "../components/Sidebar";
import HeaderBar from "../components/HeaderBar";

const AdminLayout = ({ children, onLogout }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <HeaderBar onLogout={onLogout} />
        <main className="flex-1 overflow-y-auto p-6 bg-[#1A1A1A] text-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
