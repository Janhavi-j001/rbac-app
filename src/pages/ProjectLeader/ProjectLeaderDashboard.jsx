import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ProjectLeaderDashboard.css"
import img from "../../imgs/dashboard.svg";

const ProjectLeaderDashboard = () => {
  return (
    <div className="min-h-screen bg-light-bg text-dark-text">
      {/* Sidebar Section */}
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/project-leader/manage-projects">Manage Projects</Link>
          </li>
          <li>
            <Link to="/project-leader/audit-logs">View Audit Logs</Link>
          </li>
          <li>
            <Link to="/project-leader/team-management">Manage Teams</Link>
          </li>
          <li>
            <Link to="/project-leader/settings">Settings</Link>
          </li>
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="main-content">
        <div className="dashboard-header">Project Leader Dashboard</div>
        <p className="text-lg">
          Welcome to the Project Leader Dashboard! Use the links on the sidebar
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

export default ProjectLeaderDashboard;
