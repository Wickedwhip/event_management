import React, { useState } from "react";

const EmployeeForm = ({ onSave }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !role) return alert("Fill in all fields");
    const newEmployee = { name, role };
    console.log("New employee:", newEmployee);
    if (onSave) onSave(newEmployee); // Pass data to parent component for real API call
    setName("");
    setRole("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 rounded-xl bg-gray-800 bg-opacity-30 backdrop-blur-md border border-gray-700"
    >
      <h2 className="text-2xl font-bold text-white mb-4">Add Employee</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <button
        type="submit"
        className="w-full py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
      >
        Save Employee
      </button>
    </form>
  );
};

export default EmployeeForm;
