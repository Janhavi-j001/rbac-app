import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <nav
      className={`flex items-center justify-between px-6 py-4 ${
        darkMode ? "bg-gray-900" : "bg-gray-800"
      } text-white`}
    >
      <div className="flex items-center space-x-4">
        <Link to="/dashboard" className="text-lg font-bold hover:text-gray-300">
          Dashboard
        </Link>
        <Link to="/activity-logs" className="hover:text-gray-300">
          Activity Logs
        </Link>
        <Link to="/audit-logs" className="hover:text-gray-300">
          Audit Logs
        </Link>
        <Link to="/teams" className="hover:text-gray-300">
          Teams
        </Link>
        <Link to="/add-project" className="hover:text-gray-300">
          Add Project
        </Link>
        <Link to="/settings" className="hover:text-gray-300">
          Settings
        </Link>
      </div>
      <button
        onClick={toggleTheme}
        className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
