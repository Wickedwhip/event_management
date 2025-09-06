import React, { useState } from "react";

const EmployeeForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New employee:", { name, role });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h2 className="text-xl font-bold">Add Employee</h2>
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-2 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Role"
        className="w-full p-2 border rounded"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <button type="submit" className="bg-purple-500 text-white px-3 py-1 rounded">
        Save
      </button>
    </form>
  );
};

export default EmployeeForm;

