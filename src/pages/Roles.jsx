import React, { useState, useEffect } from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';

const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState('');

  useEffect(() => {
    const storedRoles = JSON.parse(localStorage.getItem('roles')) || [];
    setRoles(storedRoles);
  }, []);

  const handleAddRole = () => {
    if (newRole.trim() === '') return;
    const updatedRoles = [...roles, newRole];
    setRoles(updatedRoles);
    localStorage.setItem('roles', JSON.stringify(updatedRoles));
    setNewRole('');
  };

  const handleDeleteRole = (role) => {
    const updatedRoles = roles.filter((r) => r !== role);
    setRoles(updatedRoles);
    localStorage.setItem('roles', JSON.stringify(updatedRoles));
  };

  return (
    <div className="flex min-h-screen">
  
      <Sidebar />
      <main className="flex-1 p-4">
        <Navbar />
        <h1 className="text-2xl font-bold">Manage Roles</h1>
        <div className="mt-4">
          <input
            type="text"
            placeholder="New Role"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            className="border p-2 rounded mr-2"
          />
          <button 
          style={{backgroundColor: "#3d52a0", color: "#ede8f5"}}
          onClick={handleAddRole} className=" px-4 py-2 rounded">
            Add Role
          </button>
        </div>
        <ul className="mt-6 space-y-2">
          {roles.map((role) => (
            <li 
            style={{backgroundColor: "#8697c4", color: "#ede8f5"}}
            key={role} className="flex justify-between items-center border p-2 rounded">
              <span>{role}</span>
              <button
              style={{backgroundColor: "#3d52a0", color: "#ede8f5"}}
                onClick={() => handleDeleteRole(role)}
                className="px-2 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Roles;
