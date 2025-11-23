import React from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../utils/auth";

const Navbar = () => {
  const user = getCurrentUser();
  const role = user?.role;

  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-accent transition duration-300">
          MyApp
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link
            to="/dashboard"
            className="hover:text-accent transition duration-300"
          >
            Dashboard
          </Link>
          {["Admin", "ProjectLeader", "TeamMember"].includes(role) && (
            <Link
              to="/activity-logs"
              className="hover:text-accent transition duration-300"
            >
              Activity Logs
            </Link>
          )}
          {["ProjectLeader", "TeamMember"].includes(role) && (
            <Link
              to="/audit-logs"
              className="hover:text-accent transition duration-300"
            >
              Audit Logs
            </Link>
          )}
          {["ProjectLeader", "TeamMember"].includes(role) && (
            <Link
              to="/teams"
              className="hover:text-accent transition duration-300"
            >
              Teams
            </Link>
          )}
          <Link
            to="/settings"
            className="hover:text-accent transition duration-300"
          >
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
