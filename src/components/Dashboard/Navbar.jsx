import React from "react";
import { Link } from "react-router-dom";
import "../../styles/page.css";
 // Ensure the CSS file is imported

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/dashboard" className="navbar-item">
          Dashboard
        </Link>
        <Link to="/activity-logs" className="navbar-item">
          Activity Logs
        </Link>
        <Link to="/audit-logs" className="navbar-item">
          Audit Logs
        </Link>
        <Link to="/teams" className="navbar-item">
          Teams
        </Link>
        <Link to="/settings" className="navbar-item">
          Settings
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
