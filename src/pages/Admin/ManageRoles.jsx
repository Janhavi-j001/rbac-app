import React, { useState } from "react";
import BackButton from "../../components/BackButton";

const ManageRoles = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", description: "Full system access and management", users: 3, permissions: 15 },
    { id: 2, name: "Project Manager", description: "Project oversight and team management", users: 8, permissions: 10 },
    { id: 3, name: "Team Member", description: "Basic project access and collaboration", users: 24, permissions: 5 }
  ]);
  const [newRole, setNewRole] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const addRole = () => {
    if (newRole.trim() && newDescription.trim() && !roles.find(role => role.name === newRole)) {
      const newRoleObj = {
        id: roles.length + 1,
        name: newRole,
        description: newDescription,
        users: 0,
        permissions: 0
      };
      setRoles([...roles, newRoleObj]);
      setNewRole("");
      setNewDescription("");
      setShowAddForm(false);
    }
  };

  const deleteRole = (id) => {
    setRoles(roles.filter(role => role.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white shadow-soft border-b border-gray-100">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <BackButton to="/admin/dashboard" />
              <div>
                <h1 className="text-3xl font-bold text-primary">Manage Roles</h1>
                <p className="text-gray-600 mt-1">Create and manage user roles and permissions</p>
              </div>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="btn-primary"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add New Role
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Add Role Form */}
        {showAddForm && (
          <div className="card mb-8">
            <h2 className="text-xl font-semibold text-primary mb-4">Add New Role</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role Name</label>
                <input
                  type="text"
                  value={newRole}
                  placeholder="Enter role name"
                  onChange={(e) => setNewRole(e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <input
                  type="text"
                  value={newDescription}
                  placeholder="Enter role description"
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="input-field"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={addRole}
                className="btn-primary"
              >
                Add Role
              </button>
            </div>
          </div>
        )}

        {/* Roles Grid */}
        <div className="grid gap-6">
          {roles.map((role) => (
            <div key={role.id} className="card hover:shadow-medium transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {role.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{role.name}</h3>
                      <p className="text-gray-600">{role.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">{role.users}</div>
                    <div className="text-sm text-gray-500">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{role.permissions}</div>
                    <div className="text-sm text-gray-500">Permissions</div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-secondary transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => deleteRole(role.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {roles.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No roles found</h3>
            <p className="text-gray-500 mb-4">Get started by creating your first role.</p>
            <button
              onClick={() => setShowAddForm(true)}
              className="btn-primary"
            >
              Add Your First Role
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageRoles;
