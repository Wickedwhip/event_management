
import React from "react";

const mock = [
  { event:"Nairobi Night Ride", tickets:40, revenue:2000 },
  { event:"Tech Conference", tickets:100, revenue:1000 },
];

export default function ReportsPage(){
  const downloadCSV = () => {
    const rows = [["Event","Tickets","Revenue"], ...mock.map(m=>[m.event,m.tickets,m.revenue])];
    const csv = rows.map(r=> r.join(",")).join("\n");
    const blob = new Blob([csv], {type:"text/csv"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href=url; a.download="reports.csv"; a.click();
    URL.revokeObjectURL(url);
  };

  const total = mock.reduce((s,m)=>s+m.revenue,0);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">Revenue & Reports</h3>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded bg-gray-100" onClick={downloadCSV}>Download CSV</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mock.map(m=>(
          <div key={m.event} className="bg-white p-4 rounded-2xl shadow">
            <div className="font-semibold">{m.event}</div>
            <div className="text-sm text-gray-500">Tickets sold: {m.tickets}</div>
            <div className="text-lg font-bold mt-2">${m.revenue}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-white rounded-2xl shadow">
        <div className="text-sm text-gray-500">Total Revenue</div>
        <div className="text-2xl font-bold">${total}</div>
      </div>
    </div>
  );
}
