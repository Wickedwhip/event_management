import React, { useState, useEffect } from "react";

const TicketForm = ({ onSubmit, ticket, onClose }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("Available");

  useEffect(() => {
    if (ticket) {
      setTitle(ticket.title);
      setPrice(ticket.price);
      setStatus(ticket.status);
    }
  }, [ticket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: ticket?.id || Date.now(), title, price, status });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-xl w-96 space-y-4 border border-gray-700"
      >
        <h2 className="text-xl font-bold text-cyan-400">
          {ticket ? "Edit Ticket" : "New Ticket"}
        </h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-cyan-400 outline-none"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-cyan-400 outline-none"
          required
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-cyan-400 outline-none"
        >
          <option>Available</option>
          <option>Sold Out</option>
          <option>Reserved</option>
        </select>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 rounded-lg border border-gray-500 hover:bg-gray-700 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-3 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
