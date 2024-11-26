import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <nav
            className={`flex items-center justify-between`}
    >
      <div className="flex items-center space-x-6">
        <Link to="/dashboard" className="text-lg font-bold ">
          Dashboard
        </Link>
        <Link to="/activity-logs" >
          Activity Logs
        </Link>
        <Link to="/audit-logs" >
          Audit Logs
        </Link>
        <Link to="/teams" >
          Teams
        </Link>
        <Link to="/settings" >
          Settings
        </Link>
      </div>
      
    </nav>
  );
};

export default Navbar;
