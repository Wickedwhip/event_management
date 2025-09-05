
import React, { useState } from "react";
import TicketForm from "./TicketForm";

const sample = [
  { id:1, event:"Nairobi Night Ride", type:"VIP", price:50, qty:20, sold:5 },
  { id:2, event:"Tech Conference", type:"Regular", price:10, qty:100, sold:100 },
];

export default function TicketsList(){
  const [tickets, setTickets] = useState(sample);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const save = (t) => {
    if(t.id) setTickets(tickets.map(x=> x.id===t.id? t : x));
    else { t.id=Date.now(); setTickets([t,...tickets]); }
    setOpen(false); setEditing(null);
  };

  const del = (id) => setTickets(tickets.filter(t=>t.id!==id));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">Tickets</h3>
        <button onClick={()=>setOpen(true)} className="px-4 py-2 rounded-xl bg-amber-400">Add Ticket</button>
      </div>

      <div className="space-y-4">
        {tickets.map(t => (
          <div key={t.id} className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-between">
            <div>
              <div className="font-semibold">{t.event} — {t.type}</div>
              <div className="text-sm text-gray-500">Price: ${t.price} • Sold: {t.sold} / {t.qty}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={()=>{setEditing(t); setOpen(true);}} className="px-3 py-1 bg-blue-100 text-blue-700 rounded">Edit</button>
              <button onClick={()=>del(t.id)} className="px-3 py-1 bg-red-100 text-red-600 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {open && <TicketForm existing={editing} onClose={()=>{setOpen(false); setEditing(null);}} onSave={save} />}
    </div>
  );
}
