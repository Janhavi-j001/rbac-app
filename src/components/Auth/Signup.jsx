import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { saveUser } from "../../utils/auth";
import signup from "../../imgs/signup.svg";
import "../../styles/page.css"; // Import the CSS file

const Signup = () => {
  const [name, setName] = useState(""); // Add name state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState(""); // Add role state
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Ensure passwords match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // Ensure name and role are selected
    if (!name || !role) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Save the user to the database or local storage
    saveUser({ name, email, password, role });
    toast.success("Signup successful! Please login.");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="signup-page-container">
      {/* Header Section */}
      <div className="signup-header">
        <h1 className="signup-title">Create Your Account</h1>
        <p className="signup-subtitle">Join us to simplify your project management workflow!</p>
      </div>

      <div className="signup-content">
        {/* Image Section */}
        <div className="signup-image-container">
          <img src={signup} alt="signup" className="signup-image" />
        </div>

        {/* Form Section */}
        <div className="signup-form-container">
          <h2 className="form-title">Sign Up</h2>
          <form onSubmit={handleSignup} className="signup-form">
            <div className="form-group">
              <label>Name</label>
              <input
                style={{color: "black"}}
                type="text"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
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
                type="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {/* Role Dropdown */}
            <div className="form-group">
              <label>Role</label>
              <select
                style={{color: "black"}}
                className="form-input"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="team_member">Team Member</option>
                <option value="project_leader">Project Leader</option>
              </select>
            </div>

            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
          <p className="form-footer">
            Already have an account?{" "}
            <span
              className="form-link"
              onClick={() => navigate("/login")}
            >
              Login here
            </span>
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="signup-footer">
        <p>© {new Date().getFullYear()} TeamHub. Secure and simplified project management.</p>
      </footer>
    </div>
  );
};

export default Signup;
