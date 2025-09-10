import React from "react";

const LoginPage = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // fake login: just check fields are not empty
    const username = e.target[0].value.trim();
    const password = e.target[1].value.trim();
    if (username && password) {
      onLogin();
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button type="submit">Sign In</button>

        {/* Extra links */}
        <div className="flex flex-col items-center mt-4 space-y-2">
          <a
            href="/forgot-password"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Forgot Password?
          </a>
          <a
            href="/register"
            className="text-sm font-semibold text-cyan-400 hover:glow hover:text-cyan-300 transition"
          >
            Register
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
