import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Dashboard/Navbar";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Projects from "./pages/Projects";
import Roles from "./pages/Roles";
import Permissions from "./pages/Permissions";
import ActivityLogs from "./pages/ActivityLogs";
import AuditLogs from "./pages/AuditLogs";
import Teams from "./pages/Teams";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply the theme based on darkMode state
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? "app dark" : "app"}>
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <Routes>
          {/* Redirect root URL to login */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/users" element={<ProtectedRoute element={<Users />} />} />
          <Route path="/roles" element={<ProtectedRoute element={<Roles />} />} />
          <Route path="/permissions" element={<ProtectedRoute element={<Permissions />} />} />
          <Route path="/projects" element={<ProtectedRoute element={<Projects />} />} />
          <Route path="/activity-logs" element={<ProtectedRoute element={<ActivityLogs />} />} />
          <Route path="/audit-logs" element={<ProtectedRoute element={<AuditLogs />} />} />
          <Route path="/teams" element={<ProtectedRoute element={<Teams />} />} />
          <Route path="/settings" element={<ProtectedRoute element={<Settings />} />} />

          {/* Catch-All Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
