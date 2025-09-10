import React, { useState, useEffect } from "react";
import { Trash2, Edit } from "lucide-react";

const DUMMY_USERS = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Inactive" },
  { id: 3, name: "Charlie Lee", email: "charlie@example.com", status: "Active" },
  { id: 4, name: "Diana Prince", email: "diana@example.com", status: "Active" },
];

const UsersOverview = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setUsers(DUMMY_USERS);
  }, []);

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.status.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit functionality not implemented yet. User ID: ${id}`);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Users Overview</h2>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full text-white">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-700 transition cursor-pointer"
              >
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.status}</td>
                <td className="p-3 text-center flex justify-center gap-2">
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="p-1 rounded-lg hover:bg-blue-500 transition"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="p-1 rounded-lg hover:bg-red-500 transition"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersOverview;
