import React from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';
import dashboard from "../imgs/dashboard.svg";
import "../styles/page.css"; // Ensure the CSS file is imported

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <main className="home-main">
        <Navbar />
        <div className="home-header">
          <h1 className="home-title">Welcome to the RBAC Dashboard</h1>
          <p className="home-subtitle">Use the sidebar to navigate through the admin features.</p>
        </div>
        <div className="home-image-container">
          <img src={dashboard} alt="dashboard" className="home-image" />
        </div>
      </main>
    </div>
  );
};

export default Home;
