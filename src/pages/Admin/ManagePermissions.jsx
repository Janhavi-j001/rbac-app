import React, { useState } from "react";
import BackButton from "../../components/BackButton";

const permissionsList = [
  { id: 1, name: "View Projects", description: "Allow viewing project details" },
  { id: 2, name: "Edit Projects", description: "Allow editing project information" },
  { id: 3, name: "Delete Projects", description: "Allow deleting projects" },
  { id: 4, name: "Manage Teams", description: "Allow team management operations" },
];

const ManagePermissions = () => {
  const [permissions, setPermissions] = useState(permissionsList);

  const togglePermission = (id) => {
    setPermissions((prev) =>
      prev.map((perm) =>
        perm.id === id ? { ...perm, granted: !perm.granted } : perm
      )
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-white shadow-soft border-b border-gray-100">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center space-x-4">
            <BackButton to="/admin/dashboard" />
            <div>
              <h1 className="text-3xl font-bold text-primary">Manage Permissions</h1>
              <p className="text-gray-600 mt-1">Control access permissions for different roles</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {permissions.map((perm) => (
              <div key={perm.id} className="card">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary">{perm.name}</h3>
                    <p className="text-gray-600 text-sm">{perm.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={perm.granted || false}
                      onChange={() => togglePermission(perm.id)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-secondary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePermissions;
