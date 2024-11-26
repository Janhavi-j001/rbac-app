import React, { useState } from "react";
import FrontPage from "./pages/FrontPage";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles
import Navbar from "./components/Dashboard/Navbar";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./pages/Home";
import ActivityLogs from "./pages/ActivityLogs";
import AuditLogs from "./pages/AuditLogs";
import Teams from "./pages/Teams";
import Projects from "./pages/Projects";
import Users from "./pages/Users";
import Permissions from "./pages/Permissions";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Roles from "./pages/Roles";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

const App = () => {
  // Initialize darkMode based on localStorage value or default to false
  
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status
  

  const handleLogin = () => {
    setIsAuthenticated(true); // Set authentication state to true after login
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Reset authentication state on logout
  };

  return (
    <Router>
      
        {/* Display Navbar only when authenticated */}
        {isAuthenticated && <Navbar />}
        
        
        <ToastContainer position="top-right" autoClose={3000} /> {/* Toastify */}
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignup={handleLogout} />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/projects" element={<ProtectedRoute element={<Projects />} />} />
          <Route path="/activity-logs" element={<ProtectedRoute element={<ActivityLogs />} />} />
          <Route path="/audit-logs" element={<ProtectedRoute element={<AuditLogs />} />} />
          <Route path="/teams" element={<ProtectedRoute element={<Teams />} />} />
          <Route path="/settings" element={<ProtectedRoute element={<Settings />} />} />
          <Route path="/users" element={<ProtectedRoute element={<Users />} />} />
          <Route path="/permissions" element={<ProtectedRoute element={<Permissions />} />} />
          <Route path="/roles" element={<ProtectedRoute element={<Roles />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
     
    </Router>
  );
};

export default App;
