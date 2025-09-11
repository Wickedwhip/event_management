import React from "react";
import "../employee.css";

const Dashboard = () => {
  return (
    <div>
      <h1 style={{background:"linear-gradient(90deg,#00eaff,#ff00cc)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>🚀 Employee Dashboard</h1>
      <div className="glass-card">
        <h3>Total Events: 12</h3>
        <h3>Total Tasks: 7</h3>
      </div>
      <div className="glass-card">
        <h3>Recent Activity</h3>
        <ul>
          <li>Updated Event: Tech Meetup</li>
          <li>Added Task: Prepare Slides</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
