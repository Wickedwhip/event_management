import React, { useState, useEffect } from "react";

const EventForm = ({ event, onSave }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Tech");
  const [status, setStatus] = useState("Draft");

  useEffect(() => {
    if (event) {
      setTitle(event.title || "");
      setDate(event.date || "");
      setLocation(event.location || "");
      setDescription(event.description || "");
      setCategory(event.category || "Tech");
      setStatus(event.status || "Draft");
    }
  }, [event]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date) return alert("Title and Date are required");
    const newEvent = { title, date, location, description, category, status };
    console.log("Saved event:", newEvent);
    if (onSave) onSave(newEvent);
    setTitle(""); setDate(""); setLocation(""); setDescription(""); setCategory("Tech"); setStatus("Draft");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-white mb-4">
        {event ? "Edit Event" : "Create Event"}
      </h2>

      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        rows={3}
      />

      <div className="flex gap-2">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <option>Tech</option>
          <option>Gaming</option>
          <option>Music</option>
          <option>Sportbike</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="flex-1 bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <option>Draft</option>
          <option>Published</option>
          <option>Coming Soon</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
      >
        {event ? "Update Event" : "Save Event"}
      </button>
    </form>
  );
};

export default EventForm;
