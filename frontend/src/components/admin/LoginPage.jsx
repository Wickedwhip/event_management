
import React, { useState } from "react";

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    // mock login: accept anything
    onLogin({ name: "Admin Joe", email, role: "admin" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-2xl font-extrabold text-indigo-700 text-center mb-6">Admin Login</h2>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required
              className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input value={password} onChange={e=>setPassword(e.target.value)} type="password" required
              className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <button type="submit" className="w-full py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-bold shadow-md hover:scale-[1.01] transition">Login</button>
        </form>
      </div>
    </div>
  );
}
