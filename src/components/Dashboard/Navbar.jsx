import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../utils/auth';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">RBAC Dashboard</h1>
      <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
    </nav>
  );
};

export default Navbar;
