import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ProjectLeaderDashboard from "./pages/ProjectLeader/ProjectLeaderDashboard";
import TeamMemberDashboard from "./pages/TeamMember/TeamMemberDashboard";
import FrontPage from "./pages/Shared/FrontPage";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Logout from "./pages/Shared/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
import ManageRoles from "./pages/Admin/ManageRoles";
import ManagePermissions from "./pages/Admin/ManagePermissions";
import ViewLogs from "./pages/Admin/ViewLogs";
import ManageProjects from "./pages/ProjectLeader/ManageProjects";
import AuditLogs from "./pages/ProjectLeader/ViewAuditLogs";
import TeamManagement from "./pages/ProjectLeader/TeamManagement";
import ViewProjects from "./pages/TeamMember/ViewProjects";
import ViewTeams from "./pages/TeamMember/ViewTeams";
import ProSet from "./pages/ProjectLeader/Settings";
import TeamSet from "../src/pages/TeamMember/Settings";
import AdminSet from "./pages/Admin/Settings";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Role-Based Protected Routes */}
        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute element={<AdminDashboard />} allowedRoles={["Admin"]} />
          }
        />
        <Route
          path="/admin/manage-roles"
          element={
            <ProtectedRoute element={<ManageRoles />} allowedRoles={["Admin"]} />
          }
        />
        <Route
          path="/admin/manage-permissions"
          element={
            <ProtectedRoute element={<ManagePermissions />} allowedRoles={["Admin"]} />
          }
        />
        <Route
          path="/admin/view-logs"
          element={<ProtectedRoute element={<ViewLogs />} allowedRoles={["Admin"]} />}
        />
        <Route
          path="/admin/settings"
          element={<ProtectedRoute element={<AdminSet />} allowedRoles={["Admin"]} />}
        />

        {/* Project Leader Routes */}
        <Route
          path="/project-leader/dashboard"
          element={
            <ProtectedRoute
              element={<ProjectLeaderDashboard />}
              allowedRoles={["ProjectLeader"]}
            />
          }
        />
        <Route
          path="/project-leader/manage-projects"
          element={
            <ProtectedRoute
              element={<ManageProjects />}
              allowedRoles={["ProjectLeader"]}
            />
          }
        />
        <Route
          path="/project-leader/audit-logs"
          element={
            <ProtectedRoute element={<AuditLogs />} allowedRoles={["ProjectLeader"]} />
          }
        />
        <Route
          path="/project-leader/team-management"
          element={
            <ProtectedRoute
              element={<TeamManagement />}
              allowedRoles={["ProjectLeader"]}
            />
          }
        />
        <Route
          path="/project-leader/settings"
          element={
            <ProtectedRoute element={<ProSet/>} allowedRoles={["ProjectLeader"]} />
          }
        />

        {/* Team Member Routes */}
        <Route
          path="/team-member/dashboard"
          element={
            <ProtectedRoute
              element={<TeamMemberDashboard />}
              allowedRoles={["TeamMember"]}
            />
          }
        />
        <Route
          path="/team-member/view-projects"
          element={
            <ProtectedRoute element={<ViewProjects />} allowedRoles={["TeamMember"]} />
          }
        />
        <Route
          path="/team-member/view-teams"
          element={
            <ProtectedRoute element={<ViewTeams />} allowedRoles={["TeamMember"]} />
          }
        />
        <Route
          path="/team-member/settings"
          element={<ProtectedRoute element={<TeamSet />} allowedRoles={["TeamMember"]} />}
        />

        {/* Shared Routes */}
        <Route
          path="/logout"
          element={<ProtectedRoute element={<Logout />} allowedRoles={["Admin", "ProjectLeader", "TeamMember"]} />}
        />

        {/* Catch-All Route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
