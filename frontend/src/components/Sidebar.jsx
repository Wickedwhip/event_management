import { Home, Calendar, Users, Ticket, BarChart2, User } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="sidebar w-64 flex-shrink-0 flex flex-col">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <nav className="flex flex-col space-y-2">
        <a href="/dashboard" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          <Home size={20} /> <span>Dashboard</span>
        </a>
        <a href="/events" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          <Calendar size={20} /> <span>Events</span>
        </a>
        <a href="/employees" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          <Users size={20} /> <span>Employees</span>
        </a>
        <a href="/tickets" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          <Ticket size={20} /> <span>Tickets</span>
        </a>
        <a href="/users" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          <User size={20} /> <span>Users</span>
        </a>
        <a href="/reports" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          <BarChart2 size={20} /> <span>Reports</span>
        </a>
        <a href="/tasks" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
            <Calendar size={20} /> <span>Tasks & Reminders</span>
        </a>

      </nav>
    </div>
  );
};

export default Sidebar;
