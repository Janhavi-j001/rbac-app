import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, getCurrentUser } from "../../utils/auth";
import loginImage from "../../imgs/login.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate loading for better UX
    setTimeout(() => {
      const isLoggedIn = loginUser(email, password);

      if (isLoggedIn) {
        const currentUser = getCurrentUser();

        if (currentUser && currentUser.role) {
          switch (currentUser.role) {
            case "Admin":
              navigate("/admin/dashboard");
              break;
            case "ProjectLeader":
              navigate("/project-leader/dashboard");
              break;
            case "TeamMember":
              navigate("/team-member/dashboard");
              break;
            default:
              setError("Role not recognized. Please contact support.");
              break;
          }
        } else {
          setError("Failed to retrieve user details. Try again.");
        }
      } else {
        setError("Invalid email or password. Please try again.");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-primary text-text-light py-8">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
          <p className="text-lg opacity-90">Sign in to access your dashboard and manage your projects</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src={loginImage} 
                alt="Login Illustration" 
                className="w-full h-auto rounded-2xl shadow-strong" 
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary rounded-full opacity-20 animate-bounce"></div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full max-w-md mx-auto">
            <div className="card">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-2">Sign In</h2>
                <p className="text-gray-600">Enter your credentials to continue</p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error}
                  </div>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing In...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={() => navigate("/signup")}
                    className="text-secondary font-semibold hover:text-primary transition-colors duration-300"
                  >
                    Sign up here
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-text-light py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} TeamHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
