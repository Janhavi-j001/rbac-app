import React, { useState, useEffect } from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ email: '', name: '', role: '' });
  const [errors, setErrors] = useState({ email: '', name: '', role: '' });

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleAddUser = () => {
    const { email, name, role } = newUser;
    let valid = true;
    let validationErrors = { email: '', name: '', role: '' };

    // Check if any field is empty
    if (!name) {
      validationErrors.name = 'Name is required.';
      valid = false;
    }

    if (!email) {
      validationErrors.email = 'Email is required.';
      valid = false;
    } else if (!validateEmail(email)) {
      validationErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (!role) {
      validationErrors.role = 'Role is required.';
      valid = false;
    }

    setErrors(validationErrors);

    if (valid) {
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setNewUser({ email: '', name: '', role: '' });
    }
  };

  const handleDeleteUser = (email) => {
    const updatedUsers = users.filter((user) => user.email !== email);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4">
        <Navbar />
        <div className="users-container">
          <h1 className="users-title">Manage Users</h1>
          <div className="users-form">
            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="user-input"
            />
            {errors.name && <p className="error-text">{errors.name}</p>} {/* Error for name */}

            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              className="user-input"
            />
            {errors.email && <p className="error-text">{errors.email}</p>} {/* Error for email */}

            <input
              type="text"
              placeholder="Role"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              className="user-input"
            />
            {errors.role && <p className="error-text">{errors.role}</p>} {/* Error for role */}

            <button onClick={handleAddUser} className="add-user-btn">
              Add User
            </button>
          </div>
          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user.email)}
                      className="delete-user-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Users;
