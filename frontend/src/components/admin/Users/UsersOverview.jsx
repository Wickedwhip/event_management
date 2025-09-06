import React from "react";

const UsersOverview = () => {
  const users = [
    { id: 1, name: "Samuel", status: "Active" },
    { id: 2, name: "Linda", status: "Suspended" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Users Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        {users.map((u) => (
          <div key={u.id} className="p-4 border rounded bg-white shadow">
            <h3 className="font-semibold">{u.name}</h3>
            <p>Status: {u.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersOverview;

