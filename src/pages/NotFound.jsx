import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <Link to="/" className="text-blue-600 underline">
        Go Back to Login
      </Link>
    </div>
  );
};

export default NotFound;
