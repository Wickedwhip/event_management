import React, { useState } from "react";
import "../../styles/LoginPage.css";


const LoginPage = ({ onLogin }) => {
  const [role, setRole] = useState("admin");

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value.trim();
    const password = e.target.password.value.trim();

    if (!username || !password) {
      alert("Enter credentials");
      return;
    }

    onLogin(role); // route based on role
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Admin / Employee Login</h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          className="login-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="login-input"
          required
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="login-select"
        >
          <option value="admin">Admin</option>
          <option value="employee">Employee</option>
        </select>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
