import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`text-center py-2 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}>
      <p>&copy; 2024 RBAC Dashboard. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
