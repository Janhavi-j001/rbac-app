import React from "react";
import { Link } from "react-router-dom";
import dashboard from "../../imgs/dashboard.svg";
import "../../styles/TeamMemberDashboard.css";

const TeamMemberDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Top Header */}
      <div className="dashboard-header">Project Leader Dashboard</div>
        <p className="text-lg mb-6">
          Welcome to the Project Leader Dashboard! Use the links on the sidebar
          to manage your responsibilities.
        </p>

      {/* Content Area */}
      <div className="dashboard-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <ul className="sidebar-links">
            <li>
              <Link to="/team-member/view-projects" className="sidebar-link">
                View Projects
              </Link>
            </li>
            <li>
              <Link to="/team-member/view-teams" className="sidebar-link">
                View Teams
              </Link>
            </li>
            <li>
              <Link to="/team-member/settings" className="sidebar-link">
                Settings
              </Link>
            </li>
            <li>
              <Link to="/login" className="sidebar-link logout">
                Logout
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          <div className="img">
            <img
              src={dashboard}
              alt="Dashboard Illustration"
              className="dashboard-image"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeamMemberDashboard;
