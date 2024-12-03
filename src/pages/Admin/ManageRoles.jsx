import React, { useState } from "react";

const ManageRoles = () => {
  const [roles, setRoles] = useState(["Admin", "Project Manager", "Team Member"]);
  const [newRole, setNewRole] = useState("");

  const addRole = () => {
    if (newRole.trim() && !roles.includes(newRole)) {
      setRoles([...roles, newRole]);
      setNewRole("");
    }
  };

  return (
    <div className="p-6 md:p-10 bg-light-bg text-dark-text min-h-screen">
      <h1 className="text-3xl font-bold text-primary mb-6">Manage Roles</h1>
      
      <ul className="space-y-4 mb-6">
        {roles.map((role, index) => (
          <li
            key={index}
            className="bg-white rounded-md shadow-md p-4 text-lg hover:bg-gray-50 transition"
          >
            {role}
          </li>
        ))}
      </ul>

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          value={newRole}
          placeholder="Add new role"
          onChange={(e) => setNewRole(e.target.value)}
          className="w-full md:w-auto p-3 border rounded-md border-gray-300 focus:ring-primary focus:border-primary"
        />
        <button
          onClick={addRole}
          className="bg-primary text-white px-6 py-3 rounded-md hover:bg-accent-light transition"
        >
          Add Role
        </button>
      </div>
    </div>
  );
};

export default ManageRoles;
