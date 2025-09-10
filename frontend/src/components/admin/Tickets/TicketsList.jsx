import React, { useState, useEffect } from "react";
import { Edit, Trash2 } from "lucide-react";
import TicketForm from "./TicketForm";

const DUMMY_TICKETS = [
  { id: 1, title: "VIP Pass", price: 150, status: "Available" },
  { id: 2, title: "General Entry", price: 50, status: "Sold Out" },
  { id: 3, title: "Backstage", price: 200, status: "Reserved" },
];

const TicketsList = () => {
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);

  useEffect(() => {
    setTickets(DUMMY_TICKETS);
  }, []);

  const filteredTickets = tickets.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.status.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setTickets((prev) => prev.filter((t) => t.id !== id));
  };

  const handleEdit = (ticket) => {
    setEditingTicket(ticket);
    setFormOpen(true);
  };

  const handleFormSubmit = (ticket) => {
    setTickets((prev) => {
      const exists = prev.find((t) => t.id === ticket.id);
      if (exists) {
        return prev.map((t) => (t.id === ticket.id ? ticket : t));
      }
      return [...prev, ticket];
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Tickets</h2>

      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search tickets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button
          onClick={() => {
            setEditingTicket(null);
            setFormOpen(true);
          }}
          className="px-4 py-2 bg-cyan-500 rounded-lg hover:bg-cyan-600 transition text-white"
        >
          New Ticket
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-white">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket) => (
              <tr
                key={ticket.id}
                className="hover:bg-gray-700 transition cursor-pointer"
              >
                <td className="p-3">{ticket.title}</td>
                <td className="p-3">${ticket.price}</td>
                <td className="p-3">{ticket.status}</td>
                <td className="p-3 text-center flex justify-center gap-2">
                  <button
                    onClick={() => handleEdit(ticket)}
                    className="p-1 rounded-lg hover:bg-blue-500 transition"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(ticket.id)}
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

      {formOpen && (
        <TicketForm
          ticket={editingTicket}
          onSubmit={handleFormSubmit}
          onClose={() => setFormOpen(false)}
        />
      )}
    </div>
  );
};

export default TicketsList;
