import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ darkMode }) => {
  return (
    <aside className={`w-60 p-4 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}>
      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className={`${darkMode ? "text-blue-400" : "text-blue-600"} hover:underline`}>Dashboard</Link>
        </li>
        <li>
          <Link to="/users" className={`${darkMode ? "text-blue-400" : "text-blue-600"} hover:underline`}>Users</Link>
        </li>
        <li>
          <Link to="/roles" className={`${darkMode ? "text-blue-400" : "text-blue-600"} hover:underline`}>Roles</Link>
        </li>
        <li>
          <Link to="/permissions" className={`${darkMode ? "text-blue-400" : "text-blue-600"} hover:underline`}>Permissions</Link>
        </li>
        <li>
          <Link to="/projects" className={`${darkMode ? "text-blue-400" : "text-blue-600"} hover:underline`}>Projects</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
