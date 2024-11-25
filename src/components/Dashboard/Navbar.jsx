import React, { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-4">
        <a href="/dashboard" className="text-lg font-bold">RBAC Dashboard</a>
        <a href="/teams" className="hover:text-gray-300">Teams</a>
        <a href="/activity-logs" className="hover:text-gray-300">Activity Logs</a>
        <a href="/audit-logs" className="hover:text-gray-300">Audit Logs</a>
        <a href="/settings" className="hover:text-gray-300">Settings</a>
      </div>
      <button
        onClick={toggleDarkMode}
        className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
