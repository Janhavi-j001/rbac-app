import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Roles from "./pages/Roles";
import Permissions from "./pages/Permissions";
import Projects from "./pages/Projects";
import Teams from "./pages/Teams";
import ActivityLogs from "./pages/ActivityLogs";
import AuditLogs from "./pages/AuditLogs";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/users" element={<ProtectedRoute element={<Users />} />} />
        <Route path="/roles" element={<ProtectedRoute element={<Roles />} />} />
        <Route path="/permissions" element={<ProtectedRoute element={<Permissions />} />} />
        <Route path="/projects" element={<ProtectedRoute element={<Projects />} />} />
        <Route path="/teams" element={<ProtectedRoute element={<Teams />} />} />
        <Route path="/activity-logs" element={<ProtectedRoute element={<ActivityLogs />} />} />
        <Route path="/audit-logs" element={<ProtectedRoute element={<AuditLogs />} />} />
        <Route path="/settings" element={<ProtectedRoute element={<Settings />} />} />

        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
