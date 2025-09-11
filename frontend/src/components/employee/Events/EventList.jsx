import { Link } from 'react-router-dom';

const EventList = () => {
  const events = [
    { id: 1, title: 'Quarterly Meeting', status: 'Upcoming' },
    { id: 2, title: 'Project Deadline', status: 'In Progress' },
    { id: 3, title: 'Team Outing', status: 'Completed' },
  ];

  return (
    <div>
      <h2>📅 Event List</h2>
      <Link to="add"><button>Add Event</button></Link>
      {events.map(event => (
        <div key={event.id} className="glass-card">
          <h3>{event.title}</h3>
          <p>Status: {event.status}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
