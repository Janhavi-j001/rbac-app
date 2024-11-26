import React, { useState, useEffect } from "react";
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
import Users from "./pages/Users"
import Permissions from "./pages/Permissions";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Roles from "./pages/Roles";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

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
        <ToastContainer position="top-right" autoClose={3000} /> {/* Toastify */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
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
      </div>
    </Router>
  );
};

export default App;
