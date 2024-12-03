import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../../styles/Settings.css";
import { Link } from "react-router-dom";

const Settings = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Toggle theme between dark and light mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  // Toggle account visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Toggle email notifications
  const toggleEmailNotifications = () => {
    setEmailNotifications(!emailNotifications);
  };

  // Navigate to Signup and delete user info (e.g., via Redux action or API)
  const deleteAccount = () => {
    dispatch({ type: "DELETE_USER" });
    navigate("/signup");
  };

  // Handle Change Password form submission
  const handleChangePassword = (e) => {
    e.preventDefault();

    // Reset error message before validation
    setErrorMessage("");

    // Validate the password inputs
    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirm password do not match.");
      return;
    }

    if (newPassword.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }

    // Dispatch an action to update password (this could be an API call or Redux action)
    dispatch({ type: "UPDATE_PASSWORD", payload: { currentPassword, newPassword } });

    // Reset form fields after successful submission
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setShowPasswordForm(false);  // Close the password form
    setErrorMessage("Password updated successfully."); // Show success message
  };

  return (
    <div className={`settings-container ${darkMode ? "dark" : ""}`}>
        <button className="back-button">
        <Link to="/team-member/dashboard" className="back-link">Back</Link>
      </button>

      <h1 className="settings-title">Settings</h1>

      {/* Account Settings */}
      <div className="settings-section">
        <h2 className="settings-subtitle">Account Settings</h2>
        <button
          className="settings-button change-password"
          onClick={() => setShowPasswordForm(!showPasswordForm)} // Toggle password form visibility
        >
          Change Password
        </button>
      </div>

      {/* Show Change Password Form */}
      {showPasswordForm && (
        <form onSubmit={handleChangePassword} className="change-password-form">
          <div className="settings-input-group">
            <label className="settings-label">Current Password</label>
            <input
              type="password"
              className="settings-input"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter your current password"
            />
          </div>
          <div className="settings-input-group">
            <label className="settings-label">New Password</label>
            <input
              type="password"
              className="settings-input"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
            />
          </div>
          <div className="settings-input-group">
            <label className="settings-label">Confirm Password</label>
            <input
              type="password"
              className="settings-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your new password"
            />
          </div>
          {/* Error message */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="settings-button submit-change-password">
            Update Password
          </button>
        </form>
      )}

      {/* Profile Settings */}
      <div className="settings-section">
        <h2 className="settings-subtitle">Profile Settings</h2>
        <div className="settings-input-group">
          <label className="settings-label">Full Name</label>
          <input type="text" className="settings-input" placeholder="Enter your full name" />
        </div>
        <div className="settings-input-group">
          <label className="settings-label">Email</label>
          <input type="email" className="settings-input" placeholder="Enter your email" />
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="settings-section">
        <h2 className="settings-subtitle">Notification Preferences</h2>
        <div className="settings-toggle">
          <label className="settings-label">Email Notifications</label>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={toggleEmailNotifications}
            className="settings-checkbox"
          />
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="settings-section">
        <h2 className="settings-subtitle">Privacy Settings</h2>
        <div className="settings-toggle">
          <label className="settings-label">Account Visibility</label>
          <input
            type="checkbox"
            checked={isVisible}
            onChange={toggleVisibility}
            className="settings-checkbox"
          />
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="settings-section">
        <h2 className="settings-subtitle">Display Settings</h2>
        <div className="settings-toggle">
          <label className="settings-label">Dark Mode</label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleTheme}
            className="settings-checkbox"
          />
        </div>
      </div>

      {/* Account Deletion */}
      <div className="settings-section danger-zone">
        <h2 className="settings-subtitle">Danger Zone</h2>
        <button onClick={deleteAccount} className="settings-button delete-account">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
