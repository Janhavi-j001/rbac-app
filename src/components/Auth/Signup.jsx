import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../../utils/auth";
import signupImage from "../../imgs/signup.svg"; // Adjust the image path as needed
import "../../styles/Signup.css" ;// Include the styling provided

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, role } = formData;

    if (!name || !email || !password || !confirmPassword || !role) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const isSaved = saveUser({ email, password, role });

    if (isSaved) {
      alert("Signup successful! Please login to continue.");
      navigate("/login");
    } else {
      setError("User already exists. Please use a different email.");
    }
  };

  return (
    <div className="page-container">
      {/* Header Section */}
      <div className="signup-header">
        <h2 className="signup-title">Sign Up</h2>
        <p className="signup-subtitle">
          Create an account to simplify your project management workflow!
        </p>
      </div>

      {/* Content Section */}
      <div className="signup-content">
        {/* Image Section */}
        <div className="signup-image-container">
          <img
            src={signupImage}
            alt="Signup Illustration"
            className="signup-image"
          />
        </div>

        {/* Form Section */}
        <div className="signup-form-container">
          <h3 className="form-title">Create Your Account</h3>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="ProjectLeader">Project Leader</option>
                <option value="TeamMember">Team Member</option>
              </select>
            </div>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
          <div className="form-footer">
            Already have an account?{" "}
            <span
              className="form-link"
              onClick={() => navigate("/login")}
            >
              Login here
            </span>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="signup-footer">
        &copy; {new Date().getFullYear()} Project Management Platform. All
        rights reserved.
      </div>
    </div>
  );
};

export default Signup;
