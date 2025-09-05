
import React, { useState } from "react";
import EventForm from "./EventForm";

const sample = [
  { id:1, title:"Nairobi Night Ride", category:"Sportbikes", start:"2025-09-10", end:"2025-09-10", location:"Nairobi", ticketsLeft:42, status:"Running", img:"" },
  { id:2, title:"Tech Conference", category:"Tech", start:"2025-10-03", end:"2025-10-04", location:"Nairobi", ticketsLeft:0, status:"Sold Out", img:"" },
];

export default function EventsList(){
  const [events, setEvents] = useState(sample);
  const [editing, setEditing] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  const handleDelete = (id) => setEvents(events.filter(e=>e.id!==id));
  const handleSave = (ev) => {
    if(ev.id){
      setEvents(events.map(e=> e.id===ev.id ? ev : e));
    } else {
      ev.id = Date.now();
      setEvents([ev, ...events]);
    }
    setOpenForm(false);
    setEditing(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Events</h3>
        <button onClick={()=>setOpenForm(true)} className="px-4 py-2 rounded-xl bg-amber-400 font-semibold">Add Event</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(ev => (
          <div key={ev.id} className="bg-white rounded-2xl p-4 shadow-md">
            <div className="h-36 bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-gray-400">Image</div>
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="font-bold text-lg">{ev.title}</div>
                <div className="text-sm text-gray-500">{ev.category} • {ev.location}</div>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-semibold ${ev.status==="Sold Out" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-700"}`}>{ev.status}</div>
            </div>
            <div className="text-sm text-gray-600 mb-3">Tickets left: <span className="font-semibold">{ev.ticketsLeft}</span></div>
            <div className="flex gap-2">
              <button onClick={()=>{ setEditing(ev); setOpenForm(true); }} className="px-3 py-1 rounded-md bg-blue-100 text-blue-700">Edit</button>
              <button onClick={()=>handleDelete(ev.id)} className="px-3 py-1 rounded-md bg-red-100 text-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {openForm && <EventForm onClose={()=>{setOpenForm(false); setEditing(null);}} onSave={handleSave} existing={editing} />}
    </div>
  );
}
