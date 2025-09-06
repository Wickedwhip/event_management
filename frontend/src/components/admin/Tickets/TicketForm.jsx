import React, { useState } from "react";

const TicketForm = () => {
  const [holder, setHolder] = useState("");
  const [event, setEvent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New ticket:", { holder, event });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h2 className="text-xl font-bold">Create Ticket</h2>
      <input
        type="text"
        placeholder="Ticket Holder"
        className="w-full p-2 border rounded"
        value={holder}
        onChange={(e) => setHolder(e.target.value)}
      />
      <input
        type="text"
        placeholder="Event Name"
        className="w-full p-2 border rounded"
        value={event}
        onChange={(e) => setEvent(e.target.value)}
      />
      <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded">
        Save
      </button>
    </form>
  );
};

export default TicketForm;

