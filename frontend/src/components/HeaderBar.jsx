import { Menu } from "lucide-react";

const HeaderBar = ({ toggleSidebar, onLogout }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* Hamburger for mobile */}
      <button className="md:hidden p-2 rounded hover:bg-gray-700" onClick={toggleSidebar}>
        <Menu size={24} />
      </button>

      <h1 className="text-xl font-bold">Admin Panel</h1>

      <button
        onClick={onLogout}
        className="p-2 rounded hover:bg-gray-700"
      >
        Logout
      </button>
    </header>
  );
};

export default HeaderBar;
