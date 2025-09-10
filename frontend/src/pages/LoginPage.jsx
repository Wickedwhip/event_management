import React from "react";

const LoginPage = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value.trim();
    const password = e.target[1].value.trim();
    if (username && password) {
      onLogin();
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <form className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96 flex flex-col gap-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-white text-center">Login</h2>
        <input type="text" placeholder="Username" className="p-2 rounded bg-gray-700 text-white outline-none" />
        <input type="password" placeholder="Password" className="p-2 rounded bg-gray-700 text-white outline-none" />
        <button type="submit" className="bg-cyan-500 py-2 rounded text-white hover:bg-cyan-600 transition">Sign In</button>

        <div className="flex flex-col items-center mt-4 space-y-2">
          <a href="/forgot-password" className="text-sm text-gray-300 hover:text-white transition">Forgot Password?</a>
          <a href="/register" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition">Register</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
