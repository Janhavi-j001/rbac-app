import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../utils/auth";
import login from "../../imgs/login.svg";
import "../../styles/page.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginUser(email, password)) {
      toast.success("Login successful!");
      navigate("/dashboard");
    } else {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-page-container">
      {/* Header Section */}
      <div className="login-header">
        <h1 className="login-title">Welcome Back!</h1>
        <p className="login-subtitle">Login to access your dashboard and manage your projects.</p>
      </div>

      <div className="login-content">
        {/* Image Section */}
        <div className="login-image-container">
          <img src={login} alt="login" className="login-image" />
        </div>

        {/* Form Section */}
        <div className="login-form-container">
          <h2 className="form-title">Login</h2>
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input
                style={{color: "black"}}
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                style={{color: "black"}}
                type="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <p className="form-footer">
            Don't have an account?{" "}
            <span
              className="form-link"
              onClick={() => navigate("/signup")}
            >
              Sign Up here
            </span>
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="login-footer">
        <p>© {new Date().getFullYear()} TeamHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
