import React from "react";

const ReportsPage = () => {
  const reports = [
    { id: 1, title: "Event Attendance", date: "2025-09-01" },
    { id: 2, title: "Ticket Sales", date: "2025-08-28" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Reports</h2>
      <ul className="space-y-2">
        {reports.map((r) => (
          <li key={r.id} className="p-2 border rounded bg-white shadow">
            {r.title} ({r.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportsPage;

