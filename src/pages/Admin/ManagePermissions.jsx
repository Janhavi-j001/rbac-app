import React, { useState } from "react";
import "../../styles/ManagePermissions.css";
import { Link } from "react-router-dom";

const permissionsList = [
  { id: 1, name: "View Projects" },
  { id: 2, name: "Edit Projects" },
  { id: 3, name: "Delete Projects" },
  { id: 4, name: "Manage Teams" },
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
    <div className="manage-permissions-container">
      <button className="back-button">
        <Link to="/admin/dashboard" className="back-link">Back</Link>
      </button>
      <h1 className="page-title">Manage Permissions</h1>

      <div className="permissions-list-container">
        <ul className="permissions-list">
          {permissions.map((perm) => (
            <li key={perm.id} className="permission-item">
              <span className="permission-name">{perm.name}</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={perm.granted || false}
                  onChange={() => togglePermission(perm.id)}
                />
                <span className="slider"></span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManagePermissions;
