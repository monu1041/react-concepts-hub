// components/Dashboard.jsx

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard Loaded 🎉</h2>

      <p>
        This component was loaded lazily
        using React.lazy().
      </p>

      <p>
        While downloading, Suspense showed
        a loading spinner.
      </p>

      <ul>
        <li>Sales Report</li>
        <li>Revenue Chart</li>
        <li>Orders</li>
        <li>Users</li>
      </ul>
    </div>
  );
};

export default Dashboard;