import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value.trim();
    const password = e.target.password.value.trim();
    if (!username || !password) {
      alert("Enter username & password");
      return;
    }

    onLogin(role);        // update App state
    navigate(`/${role}/dashboard`, { replace: true }); // go there now
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">TriVerse — Sign In</h1>

        <input name="username" className="login-input" placeholder="Username" />
        <input name="password" type="password" className="login-input" placeholder="Password" />

        <select value={role} onChange={(e) => setRole(e.target.value)} className="login-select">
          <option value="admin">Admin</option>
          <option value="employee">Employee</option>
        </select>

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
