import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../../styles/Settings.css"

const Settings = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleEmailNotifications = () => setEmailNotifications(!emailNotifications);

  const deleteAccount = () => {
    dispatch({ type: "DELETE_USER" });
    navigate("/signup");
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirm password do not match.");
      return;
    }
    if (newPassword.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }
    dispatch({ type: "UPDATE_PASSWORD", payload: { currentPassword, newPassword } });
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setShowPasswordForm(false);
    setErrorMessage("Password updated successfully.");
  };

  return (
    <div className={`p-6 md:p-10 ${darkMode ? "bg-dark-bg text-light-text" : "bg-light-bg text-dark-text"}`}>
      <h1 className="text-3xl font-bold mb-6 text-primary">Settings</h1>

      {/* Account Settings */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
        <button
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-accent-light transition"
          onClick={() => setShowPasswordForm(!showPasswordForm)}
        >
          Change Password
        </button>
      </div>

      {showPasswordForm && (
        <form onSubmit={handleChangePassword} className="space-y-4 mb-6 bg-white p-4 rounded-lg shadow">
          <div>
            <label className="block font-medium mb-2">Current Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter your current password"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">New Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your new password"
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-accent-light transition">
            Update Password
          </button>
        </form>
      )}

      {/* Profile Settings */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
        <div className="mb-4">
          <label className="block font-medium mb-2">Full Name</label>
          <input type="text" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary" placeholder="Enter your full name" />
        </div>
        <div>
          <label className="block font-medium mb-2">Email</label>
          <input type="email" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary" placeholder="Enter your email" />
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
        <div className="flex items-center gap-4">
          <label>Email Notifications</label>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={toggleEmailNotifications}
            className="w-6 h-6"
          />
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
        <div className="flex items-center gap-4">
          <label>Account Visibility</label>
          <input
            type="checkbox"
            checked={isVisible}
            onChange={toggleVisibility}
            className="w-6 h-6"
          />
        </div>
      </div>

      {/* Dark Mode */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Display Settings</h2>
        <div className="flex items-center gap-4">
          <label>Dark Mode</label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleTheme}
            className="w-6 h-6"
          />
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-red-500 mb-4">Danger Zone</h2>
        <button
          onClick={deleteAccount}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
