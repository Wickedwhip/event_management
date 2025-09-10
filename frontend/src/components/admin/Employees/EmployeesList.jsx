import React, { useState, useEffect } from "react";
import { Edit, Trash2, UserPlus } from "lucide-react";

// Dummy employee API endpoint placeholders
const EMPLOYEES_API = "/api/employees";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(EMPLOYEES_API)
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch(() => {
        // Fallback dummy data
        setEmployees([
          { id: 1, name: "John Doe", email: "john@example.com", role: "Manager", status: "Active" },
          { id: 2, name: "Alice Smith", email: "alice@example.com", role: "Developer", status: "Active" },
          { id: 3, name: "Mark Johnson", email: "mark@example.com", role: "Designer", status: "Inactive" },
          { id: 4, name: "Sophia Lee", email: "sophia@example.com", role: "QA", status: "Active" },
        ]);
      });
  }, []);

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase()) ||
      emp.role.toLowerCase().includes(search.toLowerCase()) ||
      emp.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header + Search */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Employees</h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search employees..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button className="flex items-center gap-1 px-3 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition">
            <UserPlus size={16} /> Add
          </button>
        </div>
      </div>

      {/* Employees Table */}
      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full divide-y divide-gray-700 bg-gray-800 bg-opacity-30 backdrop-blur-md">
          <thead>
            <tr className="text-left text-gray-300">
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp) => (
              <tr
                key={emp.id}
                className="hover:bg-gray-700 transition border-b border-gray-700"
              >
                <td className="px-6 py-3 text-white">{emp.name}</td>
                <td className="px-6 py-3 text-gray-300">{emp.email}</td>
                <td className="px-6 py-3 text-gray-300">{emp.role}</td>
                <td className="px-6 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      emp.status === "Active" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>
                <td className="px-6 py-3 flex gap-2">
                  <button className="hover:text-cyan-400 transition">
                    <Edit size={16} />
                  </button>
                  <button className="hover:text-red-500 transition">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
            {filteredEmployees.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-3 text-center text-gray-400">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesList;
