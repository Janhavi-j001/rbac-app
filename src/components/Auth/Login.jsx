import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, getCurrentUser } from "../../utils/auth";
import loginImage from "../../imgs/login.svg"; // Adjust the image path as needed
import "../../styles/Signup.css" ; // Reusable CSS for Login and Signup

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

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
  };

  return (
    <div className="page-container">
      {/* Header Section */}
      <div className="login-header">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Login to access your dashboard and manage your projects.</p>
      </div>

      {/* Content Section */}
      <div className="login-content">
        {/* Image Section */}
        <div className="login-image-container">
          <img src={loginImage} alt="Login Illustration" className="login-image" />
        </div>

        {/* Form Section */}
        <div className="login-form-container">
          <h3 className="form-title">Login</h3>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <div className="form-footer">
            Don't have an account?{" "}
            <span
              className="form-link"
              onClick={() => navigate("/signup")}
            >
              Sign Up here
            </span>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="login-footer">
        &copy; {new Date().getFullYear()} Project Management Platform. All rights reserved.
      </div>
    </div>
  );
};

export default Login;
