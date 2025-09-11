import { useNavigate } from 'react-router-dom';

const TaskForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Task added successfully!');
    navigate(-1); // go back to list
  };

  return (
    <div className="glass-card">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Task Title" required style={{ width:'100%', padding:10, marginBottom:10, borderRadius:6 }}/>
        <textarea placeholder="Task Description" style={{ width:'100%', padding:10, marginBottom:10, borderRadius:6 }} />
        <select style={{ width:'100%', padding:10, marginBottom:10, borderRadius:6 }}>
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">Save Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
