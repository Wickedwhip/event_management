import React, { useState, useEffect } from "react";

export default function EmployeeForm({ onClose, onSave, existing }) {
  const [form, setForm] = useState({ name:"", email:"", role:"staff", password:"" });
  useEffect(()=> existing && setForm(existing), [existing]);

  const change = (e) => setForm({...form, [e.target.name]: e.target.value});
  const submit = (e) => { e.preventDefault(); onSave(form); };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <form onSubmit={submit} className="w-full max-w-md bg-white rounded-2xl p-6">
        <h4 className="text-lg font-bold mb-3">Employee</h4>
        <input name="name" value={form.name} onChange={change} placeholder="Full name" className="w-full px-3 py-2 mb-2 border rounded"/>
        <input name="email" value={form.email} onChange={change} placeholder="Email" className="w-full px-3 py-2 mb-2 border rounded"/>
        <select name="role" value={form.role} onChange={change} className="w-full px-3 py-2 mb-2 border rounded">
          <option value="staff">Staff</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
        <input name="password" value={form.password} onChange={change} placeholder="Password" className="w-full px-3 py-2 mb-2 border rounded"/>
        <div className="flex gap-2 justify-end">
          <button type="button" onClick={onClose} className="px-3 py-2 bg-gray-100 rounded">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-amber-400 text-white rounded font-semibold">Save</button>
        </div>
      </form>
    </div>
  );
}

