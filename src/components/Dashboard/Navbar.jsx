import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../utils/auth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = getCurrentUser();
  const role = user?.role;
  const navigate = useNavigate();

  const getDashboardPath = () => {
    switch (role) {
      case "Admin":
        return "/admin/dashboard";
      case "ProjectLeader":
        return "/project-leader/dashboard";
      case "TeamMember":
        return "/team-member/dashboard";
      default:
        return "/";
    }
  };

  const navigationLinks = [
    { path: getDashboardPath(), label: "Dashboard", roles: ["Admin", "ProjectLeader", "TeamMember"] },
    { path: "/activity-logs", label: "Activity Logs", roles: ["Admin", "ProjectLeader", "TeamMember"] },
    { path: "/audit-logs", label: "Audit Logs", roles: ["ProjectLeader", "TeamMember"] },
    { path: "/teams", label: "Teams", roles: ["ProjectLeader", "TeamMember"] },
  ];

  return (
    <nav className="bg-white shadow-soft border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-2xl font-bold text-primary">TeamHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link, index) => (
              link.roles.includes(role) && (
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-700 hover:text-primary font-medium transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-700">{user?.email}</p>
                <p className="text-xs text-gray-500">{role}</p>
              </div>
              <div className="relative">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                  {user?.email?.charAt(0).toUpperCase() || 'U'}
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
            </div>
            <button 
              onClick={() => navigate("/login")}
              className="btn-primary text-sm px-4 py-2"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-4">
              {navigationLinks.map((link, index) => (
                link.roles.includes(role) && (
                  <Link
                    key={index}
                    to={link.path}
                    className="block text-gray-700 hover:text-primary font-medium transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {user?.email?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">{user?.email}</p>
                    <p className="text-xs text-gray-500">{role}</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate("/login")}
                  className="w-full btn-primary text-sm"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
