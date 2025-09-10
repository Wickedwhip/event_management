import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import TaskForm from "./TaskForm";

const DUMMY_TASKS = [
  { id: 1, title: "Prepare Report", due: "2025-09-15", assignedTo: "Michael", status: "Pending" },
  { id: 2, title: "Update Event", due: "2025-09-16", assignedTo: "LeBron", status: "In Progress" },
  { id: 3, title: "Notify Users", due: "2025-09-18", assignedTo: "Serena", status: "Complete" },
];

const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTasks(DUMMY_TASKS);
  }, []);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase()) ||
    task.assignedTo.toLowerCase().includes(search.toLowerCase()) ||
    task.status.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = (task) => {
    if (editingTask) {
      setTasks((prev) => prev.map((t) => (t.id === editingTask.id ? { ...t, ...task } : t)));
    } else {
      setTasks((prev) => [...prev, { id: Date.now(), ...task }]);
    }
    setEditingTask(null);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Tasks & Reminders</h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-1 px-3 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
        >
          <Plus size={16} /> Create Task
        </button>
      </div>

      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {filteredTasks.map((task) => (
          <div key={task.id} className="p-6 rounded-xl bg-gray-800 bg-opacity-30 backdrop-blur-md border border-gray-700 hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-white">{task.title}</h3>
            <p className="text-gray-300 mt-1">Due: {task.due}</p>
            <p className="text-gray-300 mt-1">Assigned To: {task.assignedTo}</p>
            <span className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-semibold ${
              task.status === "Pending" ? "bg-yellow-500 text-white" :
              task.status === "In Progress" ? "bg-blue-500 text-white" :
              "bg-green-500 text-white"
            }`}>
              {task.status}
            </span>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md">
            <TaskForm task={editingTask} onSave={handleSave} />
            <button
              onClick={() => { setShowForm(false); setEditingTask(null); }}
              className="mt-4 w-full py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TasksList;
