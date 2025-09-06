import React from "react";

const TicketsList = () => {
  const tickets = [
    { id: 1, event: "Tech Expo", holder: "Jane Doe" },
    { id: 2, event: "Night Ride", holder: "John Smith" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Tickets List</h2>
      <ul className="space-y-2">
        {tickets.map((t) => (
          <li key={t.id} className="p-2 border rounded">
            {t.holder} - {t.event}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketsList;

