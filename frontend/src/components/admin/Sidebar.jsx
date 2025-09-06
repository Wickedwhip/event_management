import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black text-white flex flex-col">
      <div className="p-4 font-bold text-xl border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4 space-y-3">
        <Link to="/admin/events" className="block hover:text-yellow-400">Events</Link>
        <Link to="/admin/tickets" className="block hover:text-yellow-400">Tickets</Link>
        <Link to="/admin/employees" className="block hover:text-yellow-400">Employees</Link>
        <Link to="/admin/users" className="block hover:text-yellow-400">Users</Link>
        <Link to="/admin/reports" className="block hover:text-yellow-400">Reports</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;

