import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../../pages/Shared/Logout";
import { getCurrentUser } from "../../utils/auth";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const user = getCurrentUser();
  const role = user?.role;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-primary text-white shadow-lg transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:w-60 w-64`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-[-30px] bg-accent text-white p-2 rounded-full shadow-md md:hidden"
      >
        {isOpen ? "←" : "→"}
      </button>

      {/* Sidebar Content */}
      <ul className="space-y-4 p-6 mt-10">
        <li>
          <Link
            to="/dashboard"
            className="block py-2 px-4 rounded hover:bg-accent transition duration-200"
          >
            Dashboard
          </Link>
        </li>

        {/* Admin Links */}
        {role === "Admin" && (
          <>
            <li>
              <Link
                to="/users"
                className="block py-2 px-4 rounded hover:bg-accent transition duration-200"
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                to="/roles"
                className="block py-2 px-4 rounded hover:bg-accent transition duration-200"
              >
                Roles
              </Link>
            </li>
            <li>
              <Link
                to="/permissions"
                className="block py-2 px-4 rounded hover:bg-accent transition duration-200"
              >
                Permissions
              </Link>
            </li>
          </>
        )}

        {/* Project Leader Links */}
        {role === "ProjectLeader" && (
          <>
            <li>
              <Link
                to="/manage-projects"
                className="block py-2 px-4 rounded hover:bg-accent transition duration-200"
              >
                Manage Projects
              </Link>
            </li>
            <li>
              <Link
                to="/team-management"
                className="block py-2 px-4 rounded hover:bg-accent transition duration-200"
              >
                Team Management
              </Link>
            </li>
          </>
        )}

        {/* Team Member Links */}
        {role === "TeamMember" && (
          <>
            <li>
              <Link
                to="/view-projects"
                className="block py-2 px-4 rounded hover:bg-accent transition duration-200"
              >
                View Projects
              </Link>
            </li>
            <li>
              <Link
                to="/view-teams"
                className="block py-2 px-4 rounded hover:bg-accent transition duration-200"
              >
                View Teams
              </Link>
            </li>
          </>
        )}

        <li>
          <Logout />
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
