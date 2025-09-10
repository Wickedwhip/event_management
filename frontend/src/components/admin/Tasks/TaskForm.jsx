import React, { useState, useEffect } from "react";

const TaskForm = ({ task, onSave }) => {
  const [title, setTitle] = useState("");
  const [due, setDue] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setDue(task.due || "");
      setAssignedTo(task.assignedTo || "");
      setStatus(task.status || "Pending");
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !due || !assignedTo) return alert("Fill all fields");
    const newTask = { title, due, assignedTo, status };
    if (onSave) onSave(newTask);
    setTitle(""); setDue(""); setAssignedTo(""); setStatus("Pending");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-white mb-4">{task ? "Edit Task" : "Create Task"}</h2>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <input
        type="date"
        value={due}
        onChange={(e) => setDue(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <input
        type="text"
        placeholder="Assigned To"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Complete</option>
      </select>

      <button
        type="submit"
        className="w-full py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
      >
        {task ? "Update Task" : "Save Task"}
      </button>
    </form>
  );
};

export default TaskForm;
