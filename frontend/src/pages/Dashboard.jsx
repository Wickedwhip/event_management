import AdminLayout from "../layouts/AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="dashboard grid grid-3">
        <div className="card">
          <div className="stat">124</div>
          <div className="stat-label">Events</div>
        </div>
        <div className="card">
          <div className="stat">58</div>
          <div className="stat-label">Employees</div>
        </div>
        <div className="card">
          <div className="stat">932</div>
          <div className="stat-label">Tickets Sold</div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
