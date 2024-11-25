import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 w-60 p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className="text-blue-600 hover:underline">Dashboard</Link>
        </li>
        <li>
          <Link to="/users" className="text-blue-600 hover:underline">Users</Link>
        </li>
        <li>
          <Link to="/roles" className="text-blue-600 hover:underline">Roles</Link>
        </li>
        <li>
          <Link to="/permissions" className="text-blue-600 hover:underline">Permissions</Link>
        </li>
        <li>
          <Link to="/projects" className="text-blue-600 hover:underline">Projects</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
