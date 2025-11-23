import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../utils/auth";
import img from "../../imgs/dashboard.svg";

const ProjectLeaderDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const user = getCurrentUser();
  const navigate = useNavigate();

  const menuItems = [
    { path: "/project-leader/manage-projects", label: "Manage Projects", icon: "📋" },
    { path: "/project-leader/audit-logs", label: "Audit Logs", icon: "📊" },
    { path: "/project-leader/team-management", label: "Team Management", icon: "👥" },
    { path: "/project-leader/settings", label: "Settings", icon: "⚙️" },
  ];

  const stats = [
    { label: "Active Projects", value: "12", change: "+3%", color: "text-blue-600" },
    { label: "Team Members", value: "28", change: "+5%", color: "text-green-600" },
    { label: "Completed Tasks", value: "156", change: "+12%", color: "text-purple-600" },
    { label: "Project Health", value: "94%", change: "+2%", color: "text-green-600" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-primary text-text-light transition-all duration-300 flex flex-col`}>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h2 className={`font-bold text-xl ${sidebarOpen ? 'block' : 'hidden'}`}>TeamHub</h2>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={sidebarOpen ? "M11 19l-7-7 7-7m8 14l-7-7 7-7" : "M13 5l7 7-7 7M5 5l7 7-7 7"} />
              </svg>
            </button>
          </div>
        </div>

        <nav className="flex-1 px-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex items-center px-4 py-3 rounded-lg hover:bg-secondary transition-colors group"
                >
                  <span className="text-xl mr-3">{item.icon}</span>
                  <span className={`font-medium ${sidebarOpen ? 'block' : 'hidden'}`}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4">
          <button 
            onClick={() => navigate("/login")}
            className="flex items-center w-full px-4 py-3 rounded-lg hover:bg-red-600 transition-colors"
          >
            <span className="text-xl mr-3">🚪</span>
            <span className={`font-medium ${sidebarOpen ? 'block' : 'hidden'}`}>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-soft border-b border-gray-100">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-primary">Project Leader Dashboard</h1>
                <p className="text-gray-600 mt-1">Welcome back, {user?.email || 'Project Leader'}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {user?.email?.charAt(0).toUpperCase() || 'P'}
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-primary mt-1">{stat.value}</p>
                  </div>
                  <div className={`text-sm font-medium ${stat.color}`}>
                    {stat.change}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Dashboard Content */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project Overview */}
            <div className="card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Project Overview</h2>
              <p className="text-gray-600 mb-6">
                Manage your projects, track progress, and coordinate with your team members 
                to ensure successful project delivery.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Projects in Progress</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">8 Active</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Pending Reviews</span>
                  <span className="text-gray-600">5 items</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Team Availability</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">85% Available</span>
                </div>
              </div>
            </div>

            {/* Dashboard Image */}
            <div className="card flex items-center justify-center">
              <div className="text-center">
                <img
                  src={img}
                  alt="Dashboard Illustration"
                  className="w-full max-w-sm mx-auto mb-4 rounded-lg"
                />
                <h3 className="text-lg font-semibold text-primary mb-2">Project Command Center</h3>
                <p className="text-gray-600">
                  Oversee projects, manage teams, and drive successful outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">Quick Actions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="card hover:bg-primary hover:text-white group transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-semibold">{item.label}</h3>
                    <p className="text-sm opacity-75 mt-1 group-hover:opacity-100">
                      Click to access
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectLeaderDashboard;
