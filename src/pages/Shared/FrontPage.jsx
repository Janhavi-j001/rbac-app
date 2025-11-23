import React from "react";
import { useNavigate } from "react-router-dom";
import teams from "../../imgs/team-colab.svg";

const FrontPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="bg-primary text-text-light">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to <span className="text-secondary">TeamHub</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto opacity-90">
            Collaborate seamlessly, manage roles, and power up your projects with ease.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Empower Your Team
              </h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Transform your workflow with our comprehensive role-based access control system. 
                Manage permissions, streamline collaboration, and boost productivity with 
                enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="btn-primary flex-1 text-center"
                  onClick={() => navigate("/login")}
                >
                  Sign In
                </button>
                <button 
                  className="btn-secondary flex-1 text-center"
                  onClick={() => navigate("/signup")}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative max-w-md mx-auto">
              <img 
                src={teams} 
                alt="Team Collaboration" 
                className="w-full h-auto rounded-2xl shadow-strong transform hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-secondary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-primary">
            Why Choose TeamHub?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card text-center group hover:bg-primary hover:text-white transition-all duration-300 py-4">
              <div className="w-12 h-12 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Access</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-200">Enterprise-grade security with granular permissions</p>
            </div>

            <div className="card text-center group hover:bg-primary hover:text-white transition-all duration-300 py-4">
              <div className="w-12 h-12 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-200">Seamless collaboration tools for teams</p>
            </div>

            <div className="card text-center group hover:bg-primary hover:text-white transition-all duration-300 py-4">
              <div className="w-12 h-12 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Project Management</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-200">Streamlined workflows and tracking</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-secondary text-text-light mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Ready to Transform Your Workflow?</h3>
            <p className="text-base opacity-90 mb-6 max-w-xl mx-auto">
              Join thousands of teams who trust TeamHub for their project management needs.
            </p>
            <button 
              className="bg-white text-secondary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              onClick={() => navigate("/signup")}
            >
              Start Your Journey
            </button>
          </div>
          <div className="border-t border-white border-opacity-20 mt-8 pt-6 text-center">
            <p className="opacity-75 text-sm">
              © {new Date().getFullYear()} TeamHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FrontPage;
