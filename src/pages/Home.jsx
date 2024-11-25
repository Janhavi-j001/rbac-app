import React from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';

const Home = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4">
        <Navbar />
        <h1 className="text-2xl font-bold">Welcome to the RBAC Dashboard</h1>
        <p className="mt-2">Use the sidebar to navigate through the admin features.</p>
      </main>
    </div>
  );
};

export default Home;
