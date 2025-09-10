import { Home, Calendar, Users, Ticket, BarChart2, User } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col w-64">
      <h2 className="text-xl font-bold mb-6 text-white">Admin Panel</h2>

      <nav className="flex flex-col space-y-1">
        <a href="/dashboard">
          <Home size={20} />
          <span>Dashboard</span>
        </a>
        <a href="/events">
          <Calendar size={20} />
          <span>Events</span>
        </a>
        <a href="/employees">
          <Users size={20} />
          <span>Employees</span>
        </a>
        <a href="/tickets">
          <Ticket size={20} />
          <span>Tickets</span>
        </a>
        <a href="/users">
          <User size={20} />
          <span>Users</span>
        </a>
        <a href="/reports">
          <BarChart2 size={20} />
          <span>Reports</span>
        </a>
        <a href="/settings" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          <Users size={20} /> <span>Settings</span>
        </a>

      </nav>
    </div>
  );
};

export default Sidebar;
