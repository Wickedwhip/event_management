
import React, { useState, useEffect } from "react";

export default function EventForm({ onClose, onSave, existing }) {
  const [form, setForm] = useState({
    title: "", category:"Tech", startDate:"", endDate:"", location:"", description:"", tickets:0, status:"Running", image:null
  });

  useEffect(()=> { if(existing) setForm({...existing}); }, [existing]);

  const change = (e) => setForm({...form, [e.target.name]: e.target.value});
  const fileChange = (e) => setForm({...form, image: e.target.files[0]});

  const submit = (ev) => { ev.preventDefault(); onSave(form); };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <form onSubmit={submit} className="w-full max-w-2xl bg-white rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xl font-bold">Event Form</h4>
          <button type="button" onClick={onClose} className="text-gray-500">Close</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input name="title" value={form.title} onChange={change} required className="mt-1 w-full px-3 py-2 border rounded-lg"/>
          </div>

          <div>
            <label className="block text-sm font-medium">Category</label>
            <select name="category" value={form.category} onChange={change} className="mt-1 w-full px-3 py-2 border rounded-lg">
              <option>Tech</option>
              <option>Music</option>
              <option>Sportbikes</option>
              <option>Art</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Start Date</label>
            <input name="startDate" value={form.startDate} onChange={change} type="date" className="mt-1 w-full px-3 py-2 border rounded-lg"/>
          </div>

          <div>
            <label className="block text-sm font-medium">End Date</label>
            <input name="endDate" value={form.endDate} onChange={change} type="date" className="mt-1 w-full px-3 py-2 border rounded-lg"/>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Location</label>
            <input name="location" value={form.location} onChange={change} className="mt-1 w-full px-3 py-2 border rounded-lg"/>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Description</label>
            <textarea name="description" value={form.description} onChange={change} rows="4" className="mt-1 w-full px-3 py-2 border rounded-lg"/>
          </div>

          <div>
            <label className="block text-sm font-medium">Tickets Available</label>
            <input name="tickets" value={form.tickets} onChange={change} type="number" min="0" className="mt-1 w-full px-3 py-2 border rounded-lg"/>
          </div>

          <div>
            <label className="block text-sm font-medium">Status</label>
            <select name="status" value={form.status} onChange={change} className="mt-1 w-full px-3 py-2 border rounded-lg">
              <option>Running</option>
              <option>Sold Out</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Image</label>
            <input type="file" onChange={fileChange} className="mt-1"/>
            {form.image && <div className="mt-2 text-sm text-gray-600">Selected: {form.image.name}</div>}
          </div>
        </div>

        <div className="mt-4 flex gap-3 justify-end">
          <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-100">Cancel</button>
          <button type="submit" className="px-4 py-2 rounded-lg bg-amber-400 text-white font-semibold">Save Event</button>
        </div>
      </form>
    </div>
  );
}
