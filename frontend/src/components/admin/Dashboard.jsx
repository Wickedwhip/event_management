import React, { useState, useEffect } from "react";
import "./Dashboard.css"; // we'll create this CSS file

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [activities, setActivities] = useState([]);
  const [nextEvent, setNextEvent] = useState({});

  useEffect(() => {
    // Dummy stats
    setStats([
      { label: "Total Users", value: 1245, color: "#00f5ff" },
      { label: "Total Employees", value: 58, color: "#ff00ff" },
      { label: "Upcoming Events", value: 12, color: "#00ff80" },
      { label: "Active Tasks", value: 34, color: "#8000ff" },
    ]);

    setActivities([
      { activity: "John created a new event", time: "2h ago" },
      { activity: "Alice updated employee profile", time: "5h ago" },
      { activity: "Event 'Tech Summit' published", time: "1d ago" },
      { activity: "Ticket 'VIP Pass' assigned", time: "2d ago" },
    ]);

    setNextEvent({ title: "Tech Summit 2025", countdown: "12d 5h 30m" });
  }, []);

  return (
    <div className="dashboard-container">
      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="stat-card"
            style={{ borderColor: stat.color, boxShadow: `0 0 10px ${stat.color}` }}
          >
            <h3 style={{ color: stat.color }}>{stat.label}</h3>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="activity-card">
        <h2>Recent Activity</h2>
        <ul>
          {activities.map((act, idx) => (
            <li key={idx}>
              <span>{act.activity}</span>
              <span className="time">{act.time}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Next Event */}
      <div className="next-event-card">
        <h2>Next Event</h2>
        <p className="event-title">{nextEvent.title}</p>
        <p className="countdown">{nextEvent.countdown}</p>
      </div>
    </div>
  );
};

export default Dashboard;
