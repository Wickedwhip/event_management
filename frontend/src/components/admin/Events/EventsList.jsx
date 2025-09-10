import React, { useState, useEffect } from "react";
import { Edit, Eye, Trash2, Plus } from "lucide-react";
import EventForm from "./EventForm";

const EVENTS_API = "/api/events";

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    fetch(EVENTS_API)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch(() => {
        setEvents([
          { id: 1, title: "Tech Summit", date: "2025-10-10", status: "Published" },
          { id: 2, title: "Gaming Expo", date: "2025-11-05", status: "Draft" },
          { id: 3, title: "Music Fest", date: "2025-12-01", status: "Coming Soon" },
        ]);
      });
  }, []);

  const handleStatusToggle = (id, newStatus) => {
    setEvents((prev) =>
      prev.map((ev) => (ev.id === id ? { ...ev, status: newStatus } : ev))
    );
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setShowForm(true);
  };

  const handleSave = (newEvent) => {
    if (editingEvent) {
      setEvents((prev) =>
        prev.map((ev) => (ev.id === editingEvent.id ? { ...editingEvent, ...newEvent } : ev))
      );
    } else {
      setEvents((prev) => [...prev, { id: Date.now(), ...newEvent }]);
    }
    setEditingEvent(null);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Events</h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-1 px-3 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
        >
          <Plus size={16} /> Create Event
        </button>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-6 rounded-xl bg-gray-800 bg-opacity-30 backdrop-blur-md border border-gray-700 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-bold text-white">{event.title}</h3>
            <p className="text-gray-300 mt-1">{event.date}</p>
            <span
              className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-semibold ${
                event.status === "Published"
                  ? "bg-green-500 text-white"
                  : event.status === "Draft"
                  ? "bg-yellow-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              {event.status}
            </span>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleEdit(event)}
                className="hover:text-cyan-400 transition"
              >
                <Edit size={16} />
              </button>
              <button className="hover:text-gray-400 transition">
                <Eye size={16} />
              </button>
              <button className="hover:text-red-500 transition">
                <Trash2 size={16} />
              </button>
              <select
                value={event.status}
                onChange={(e) => handleStatusToggle(event.id, e.target.value)}
                className="ml-auto bg-gray-700 text-white px-2 py-1 rounded focus:outline-none"
              >
                <option>Published</option>
                <option>Draft</option>
                <option>Coming Soon</option>
              </select>
            </div>
          </div>
        ))}
      </div>

      {/* Event Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md">
            <EventForm event={editingEvent} onSave={handleSave} />
            <button
              onClick={() => { setShowForm(false); setEditingEvent(null); }}
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

export default EventsList;
