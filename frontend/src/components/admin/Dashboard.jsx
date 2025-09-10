import React, { useState, useEffect } from "react";

// Dummy URLs (replace with real API endpoints later)
const STATS_API = "/api/stats";
const ACTIVITIES_API = "/api/activities";
const NEXT_EVENT_API = "/api/next-event";

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [activities, setActivities] = useState([]);
  const [nextEvent, setNextEvent] = useState({});

  useEffect(() => {
    // Fetch stats
    fetch(STATS_API)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => {
        // Fallback dummy data
        setStats([
          { label: "Total Users", value: 1245, color: "cyan" },
          { label: "Total Employees", value: 58, color: "pink" },
          { label: "Upcoming Events", value: 12, color: "green" },
          { label: "Active Tasks", value: 34, color: "purple" },
        ]);
      });

    // Fetch activities
    fetch(ACTIVITIES_API)
      .then((res) => res.json())
      .then((data) => setActivities(data))
      .catch(() => {
        setActivities([
          { activity: "John created a new event", time: "2h ago" },
          { activity: "Alice updated employee profile", time: "5h ago" },
          { activity: "Event 'Tech Summit' published", time: "1d ago" },
          { activity: "Ticket 'VIP Pass' assigned", time: "2d ago" },
        ]);
      });

    // Fetch next event
    fetch(NEXT_EVENT_API)
      .then((res) => res.json())
      .then((data) => setNextEvent(data))
      .catch(() => {
        setNextEvent({ title: "Tech Summit 2025", countdown: "12d 5h 30m" });
      });
  }, []);

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`p-6 rounded-xl bg-gray-800 bg-opacity-30 backdrop-blur-md border border-gray-700 hover:shadow-lg transition duration-300`}
            style={{
              borderColor: `rgba(${stat.color === "cyan" ? "0,245,255" :
                                stat.color === "pink" ? "255,0,255" :
                                stat.color === "green" ? "0,255,128" : "128,0,255"},0.5)`,
              boxShadow: `0 0 12px rgba(${stat.color === "cyan" ? "0,245,255" :
                                       stat.color === "pink" ? "255,0,255" :
                                       stat.color === "green" ? "0,255,128" : "128,0,255"},0.3)`,
            }}
          >
            <h3 className={`text-sm font-medium text-${stat.color}-400`}>
              {stat.label}
            </h3>
            <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800 bg-opacity-30 backdrop-blur-md border border-gray-700 rounded-xl p-6">
        <h2 className="text-lg font-bold text-white mb-4">Recent Activity</h2>
        <ul className="space-y-2">
          {activities.map((act, idx) => (
            <li
              key={idx}
              className="flex justify-between px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              <span>{act.activity}</span>
              <span className="text-gray-400 text-sm">{act.time}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Event Countdown Widget */}
      <div className="bg-gray-800 bg-opacity-30 backdrop-blur-md border border-gray-700 rounded-xl p-6 flex flex-col items-center">
        <h2 className="text-lg font-bold text-white mb-2">Next Event</h2>
        <p className="text-cyan-400 font-semibold">{nextEvent.title}</p>
        <p className="text-white mt-2">Countdown: {nextEvent.countdown}</p>
      </div>
    </div>
  );
};

export default Dashboard;
