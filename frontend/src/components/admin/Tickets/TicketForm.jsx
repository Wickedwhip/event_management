
import React, { useState, useEffect } from "react";

export default function TicketForm({ onClose, onSave, existing }) {
  const [form, setForm] = useState({ event:"", type:"Regular", price:0, qty:0, sold:0 });
  useEffect(()=> existing && setForm(existing), [existing]);

  const change = (e) => setForm({...form, [e.target.name]: e.target.value});

  const submit = (e) => { e.preventDefault(); onSave(form); };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <form onSubmit={submit} className="w-full max-w-lg bg-white rounded-2xl p-6">
        <h4 className="text-lg font-bold mb-4">Ticket Form</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input name="event" value={form.event} onChange={change} placeholder="Event name" className="px-3 py-2 border rounded"/>
          <input name="type" value={form.type} onChange={change} placeholder="Type (VIP/Regular)" className="px-3 py-2 border rounded"/>
          <input name="price" value={form.price} onChange={change} type="number" placeholder="Price" className="px-3 py-2 border rounded"/>
          <input name="qty" value={form.qty} onChange={change} type="number" placeholder="Quantity" className="px-3 py-2 border rounded"/>
        </div>
        <div className="mt-4 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-3 py-2 rounded bg-gray-100">Cancel</button>
          <button type="submit" className="px-4 py-2 rounded bg-amber-400 text-white font-semibold">Save</button>
        </div>
      </form>
    </div>
  );
}
