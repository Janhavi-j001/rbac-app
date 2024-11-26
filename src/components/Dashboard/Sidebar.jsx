import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../pages/Logout';

const Sidebar = ({ darkMode }) => {
  return (
    <aside style={{background: "#3d52a0"}} className={`w-60 p-4`}>
      <ul style={{color: "#ede8f5"}} className="space-y-4">
        <li>
          <Link to="/dashboard" className={`hover:underline`}>Dashboard</Link>
        </li>
        <li>
          <Link to="/users" className={` hover:underline`}>Users</Link>
        </li>
        <li>
          <Link to="/roles" className={`hover:underline`}>Roles</Link>
        </li>
        <li>
          <Link to="/permissions" className={`hover:underline`}>Permissions</Link>
        </li>
        <li>
          <Link to="/projects" className={`hover:underline`}>Projects</Link>
        </li>
        <li>
          <Logout></Logout>
          
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
