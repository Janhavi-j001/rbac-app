import React, { useState, useEffect } from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';

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
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4">
        <Navbar />
        <h1 className="text-2xl font-bold">Manage Permissions</h1>
        {roles.length === 0 ? (
          <p className="mt-4">No roles available. Add roles first.</p>
        ) : (
          <div className="mt-6 space-y-6">
            {roles.map((role) => (
              <div key={role} className="p-4 border rounded">
                <h2 className="text-xl font-semibold">{role}</h2>
                <div className="mt-2 space-y-2">
                  <label className="block">
                    <input
                      type="checkbox"
                      checked={permissions[role]?.read || false}
                      onChange={(e) => handlePermissionChange(role, 'read', e.target.checked)}
                    />
                    <span className="ml-2">Read</span>
                  </label>
                  <label className="block">
                    <input
                      type="checkbox"
                      checked={permissions[role]?.write || false}
                      onChange={(e) => handlePermissionChange(role, 'write', e.target.checked)}
                    />
                    <span className="ml-2">Write</span>
                  </label>
                  <label className="block">
                    <input
                      type="checkbox"
                      checked={permissions[role]?.delete || false}
                      onChange={(e) => handlePermissionChange(role, 'delete', e.target.checked)}
                    />
                    <span className="ml-2">Delete</span>
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
