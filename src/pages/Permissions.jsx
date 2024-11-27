import React, { useState, useEffect } from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';
import '../styles/page.css'; // Import the CSS file

const Permissions = () => {
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState({});

  useEffect(() => {
    const storedRoles = JSON.parse(localStorage.getItem('roles')) || [];
    setRoles(storedRoles);
    const storedPermissions = JSON.parse(localStorage.getItem('permissions')) || {};
    setPermissions(storedPermissions);
  }, []);

  const handlePermissionChange = (role, permission, value) => {
    const updatedPermissions = { ...permissions };
    if (!updatedPermissions[role]) updatedPermissions[role] = {};
    updatedPermissions[role][permission] = value;

    setPermissions(updatedPermissions);
    localStorage.setItem('permissions', JSON.stringify(updatedPermissions));
  };

  return (
    <div className="permissions-container">
      <Sidebar />
      <main className="permissions-main">
        <Navbar />
        <h1 className="permissions-title">Manage Permissions</h1>
        {roles.length === 0 ? (
          <p className="permissions-no-roles">No roles available. Add roles first.</p>
        ) : (
          <div className="permissions-roles">
            {roles.map((role) => (
              <div key={role} className="permissions-role">
                <h2 className="permissions-role-title">{role}</h2>
                <div className="permissions-options">
                  <label className="permissions-option">
                    <input
                      type="checkbox"
                      checked={permissions[role]?.read || false}
                      onChange={(e) => handlePermissionChange(role, 'read', e.target.checked)}
                    />
                    <span className="permissions-label">Read</span>
                  </label>
                  <label className="permissions-option">
                    <input
                      type="checkbox"
                      checked={permissions[role]?.write || false}
                      onChange={(e) => handlePermissionChange(role, 'write', e.target.checked)}
                    />
                    <span className="permissions-label">Write</span>
                  </label>
                  <label className="permissions-option">
                    <input
                      type="checkbox"
                      checked={permissions[role]?.delete || false}
                      onChange={(e) => handlePermissionChange(role, 'delete', e.target.checked)}
                    />
                    <span className="permissions-label">Delete</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Permissions;
