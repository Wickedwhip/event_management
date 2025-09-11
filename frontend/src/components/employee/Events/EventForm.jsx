import { useNavigate } from 'react-router-dom';

const EventForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Event added successfully!');
    navigate(-1); // go back to list
  };

  return (
    <div className="glass-card">
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Event Title" required style={{ width:'100%', padding:10, marginBottom:10, borderRadius:6 }}/>
        <textarea placeholder="Event Description" style={{ width:'100%', padding:10, marginBottom:10, borderRadius:6 }} />
        <select style={{ width:'100%', padding:10, marginBottom:10, borderRadius:6 }}>
          <option value="">Select Status</option>
          <option value="Upcoming">Upcoming</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">Save Event</button>
      </form>
    </div>
  );
};

export default EventForm;
