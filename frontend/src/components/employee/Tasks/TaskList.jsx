import { Link } from 'react-router-dom';

const TaskList = () => {
  const tasks = [
    { id: 1, title: 'Prepare Report', status: 'Pending' },
    { id: 2, title: 'Code Review', status: 'In Progress' },
    { id: 3, title: 'Team Meeting', status: 'Completed' },
  ];

  return (
    <div>
      <h2>📝 Task List</h2>
      <Link to="add"><button>Add Task</button></Link>
      {tasks.map(task => (
        <div key={task.id} className="glass-card">
          <h3>{task.title}</h3>
          <p>Status: {task.status}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
