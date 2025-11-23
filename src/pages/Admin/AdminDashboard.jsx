import React from "react";
import { Link } from "react-router-dom";
import img from "../../imgs/dashboard.svg";
import "../../styles/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li>
           <Link to="/admin/manage-roles">Manage Roles</Link>
          </li>
          <li>
           <Link to="/admin/manage-permissions">Manage Permissions</Link>
          </li>
          <li>
           <Link to="/admin/view-logs">View Logs</Link>
          </li>
          <li>
           <Link to="/admin/settings">Settings</Link>
           </li>
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="dashboard-header">Admin Dashboard</div>
        <p className="text-lg">
          Welcome to the Admin Dashboard! Use the links on the sidebar
          to manage your responsibilities.
        </p>
        <img
          src={img}
          alt="Dashboard Illustration"
          className="dashboard-image"
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
