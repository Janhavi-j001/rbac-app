import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../utils/auth";
import BackButton from "../../components/BackButton";

const Settings = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();
  
  // Profile Settings
  const [profile, setProfile] = useState({
    fullName: user?.name || "John Doe",
    email: user?.email || "admin@teamhub.com",
    phone: "+1 (555) 123-4567",
    department: "Information Technology",
    jobTitle: "System Administrator",
    location: "New York, USA"
  });

  // Security Settings
  const [security, setSecurity] = useState({
    twoFactorAuth: true,
    loginAlerts: true,
    sessionTimeout: "30",
    passwordExpiry: "90"
  });

  // Notification Settings
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsAlerts: true,
    weeklyReports: true,
    securityAlerts: true,
    systemUpdates: false
  });

  // Privacy Settings
  const [privacy, setPrivacy] = useState({
    profileVisibility: "team",
    activityStatus: true,
    dataSharing: false,
    analyticsTracking: true
  });

  // System Preferences
  const [preferences, setPreferences] = useState({
    theme: "light",
    language: "en",
    timezone: "UTC-5",
    dateFormat: "MM/DD/YYYY",
    currency: "USD"
  });

  const [activeTab, setActiveTab] = useState("profile");
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [message, setMessage] = useState({ type: "", text: "" });

  const tabs = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "security", label: "Security", icon: "🔒" },
    { id: "notifications", label: "Notifications", icon: "🔔" },
    { id: "privacy", label: "Privacy", icon: "🛡️" },
    { id: "preferences", label: "Preferences", icon: "⚙️" }
  ];

  const handleProfileUpdate = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleSecurityUpdate = (field, value) => {
    setSecurity(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationUpdate = (field, value) => {
    setNotifications(prev => ({ ...prev, [field]: value }));
  };

  const handlePrivacyUpdate = (field, value) => {
    setPrivacy(prev => ({ ...prev, [field]: value }));
  };

  const handlePreferenceUpdate = (field, value) => {
    setPreferences(prev => ({ ...prev, [field]: value }));
    if (field === 'theme') {
      if (value === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match" });
      return;
    }
    if (passwordForm.newPassword.length < 8) {
      setMessage({ type: "error", text: "Password must be at least 8 characters" });
      return;
    }
    setMessage({ type: "success", text: "Password updated successfully" });
    setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    setShowPasswordForm(false);
  };

  const handleSaveSettings = () => {
    setMessage({ type: "success", text: "Settings saved successfully" });
    setTimeout(() => setMessage({ type: "", text: "" }), 3000);
  };

  const ToggleSwitch = ({ checked, onChange, label }) => (
    <div className="flex items-center justify-between py-2">
      <span className="text-gray-700">{label}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-secondary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
      </label>
    </div>
  );

  return (
    <div className={`min-h-screen bg-background ${preferences.theme === 'dark' ? 'dark' : ''}`}>
      {/* Header */}
      <div className="bg-white shadow-soft border-b border-gray-100">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center space-x-4">
            <BackButton to="/admin/dashboard" />
            <div>
              <h1 className="text-3xl font-bold text-primary">Settings</h1>
              <p className="text-gray-600 mt-1">Manage your account preferences and security settings</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="card p-0 overflow-hidden">
              <div className="p-4 bg-gray-50 border-b">
                <h3 className="font-semibold text-gray-800">Settings Menu</h3>
              </div>
              <nav className="p-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {message.text && (
              <div className={`mb-6 p-4 rounded-lg ${
                message.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"
              }`}>
                {message.text}
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="space-y-6">
                <div className="card">
                  <h2 className="text-xl font-semibold text-primary mb-6">Profile Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={profile.fullName}
                        onChange={(e) => handleProfileUpdate("fullName", e.target.value)}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => handleProfileUpdate("email", e.target.value)}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={profile.phone}
                        onChange={(e) => handleProfileUpdate("phone", e.target.value)}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                      <input
                        type="text"
                        value={profile.department}
                        onChange={(e) => handleProfileUpdate("department", e.target.value)}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                      <input
                        type="text"
                        value={profile.jobTitle}
                        onChange={(e) => handleProfileUpdate("jobTitle", e.target.value)}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        value={profile.location}
                        onChange={(e) => handleProfileUpdate("location", e.target.value)}
                        className="input-field"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <div className="card">
                  <h2 className="text-xl font-semibold text-primary mb-6">Security Settings</h2>
                  <div className="space-y-4">
                    <ToggleSwitch
                      checked={security.twoFactorAuth}
                      onChange={(e) => handleSecurityUpdate("twoFactorAuth", e.target.checked)}
                      label="Two-Factor Authentication"
                    />
                    <ToggleSwitch
                      checked={security.loginAlerts}
                      onChange={(e) => handleSecurityUpdate("loginAlerts", e.target.checked)}
                      label="Login Alerts"
                    />
                    <div className="grid md:grid-cols-2 gap-4 pt-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                        <select
                          value={security.sessionTimeout}
                          onChange={(e) => handleSecurityUpdate("sessionTimeout", e.target.value)}
                          className="input-field"
                        >
                          <option value="15">15 minutes</option>
                          <option value="30">30 minutes</option>
                          <option value="60">1 hour</option>
                          <option value="120">2 hours</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password Expiry (days)</label>
                        <select
                          value={security.passwordExpiry}
                          onChange={(e) => handleSecurityUpdate("passwordExpiry", e.target.value)}
                          className="input-field"
                        >
                          <option value="30">30 days</option>
                          <option value="60">60 days</option>
                          <option value="90">90 days</option>
                          <option value="never">Never</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold text-primary mb-4">Change Password</h3>
                  {!showPasswordForm ? (
                    <button
                      onClick={() => setShowPasswordForm(true)}
                      className="btn-primary"
                    >
                      Change Password
                    </button>
                  ) : (
                    <form onSubmit={handlePasswordChange} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <input
                          type="password"
                          value={passwordForm.currentPassword}
                          onChange={(e) => setPasswordForm(prev => ({ ...prev, currentPassword: e.target.value }))}
                          className="input-field"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <input
                          type="password"
                          value={passwordForm.newPassword}
                          onChange={(e) => setPasswordForm(prev => ({ ...prev, newPassword: e.target.value }))}
                          className="input-field"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                        <input
                          type="password"
                          value={passwordForm.confirmPassword}
                          onChange={(e) => setPasswordForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                          className="input-field"
                          required
                        />
                      </div>
                      <div className="flex space-x-3">
                        <button type="submit" className="btn-primary">Update Password</button>
                        <button
                          type="button"
                          onClick={() => setShowPasswordForm(false)}
                          className="px-4 py-2 text-gray-600 hover:text-gray-800"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <div className="card">
                <h2 className="text-xl font-semibold text-primary mb-6">Notification Preferences</h2>
                <div className="space-y-4">
                  <ToggleSwitch
                    checked={notifications.emailNotifications}
                    onChange={(e) => handleNotificationUpdate("emailNotifications", e.target.checked)}
                    label="Email Notifications"
                  />
                  <ToggleSwitch
                    checked={notifications.pushNotifications}
                    onChange={(e) => handleNotificationUpdate("pushNotifications", e.target.checked)}
                    label="Push Notifications"
                  />
                  <ToggleSwitch
                    checked={notifications.smsAlerts}
                    onChange={(e) => handleNotificationUpdate("smsAlerts", e.target.checked)}
                    label="SMS Alerts"
                  />
                  <ToggleSwitch
                    checked={notifications.weeklyReports}
                    onChange={(e) => handleNotificationUpdate("weeklyReports", e.target.checked)}
                    label="Weekly Reports"
                  />
                  <ToggleSwitch
                    checked={notifications.securityAlerts}
                    onChange={(e) => handleNotificationUpdate("securityAlerts", e.target.checked)}
                    label="Security Alerts"
                  />
                  <ToggleSwitch
                    checked={notifications.systemUpdates}
                    onChange={(e) => handleNotificationUpdate("systemUpdates", e.target.checked)}
                    label="System Updates"
                  />
                </div>
              </div>
            )}

            {/* Privacy Tab */}
            {activeTab === "privacy" && (
              <div className="card">
                <h2 className="text-xl font-semibold text-primary mb-6">Privacy Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Profile Visibility</label>
                    <select
                      value={privacy.profileVisibility}
                      onChange={(e) => handlePrivacyUpdate("profileVisibility", e.target.value)}
                      className="input-field"
                    >
                      <option value="public">Public</option>
                      <option value="team">Team Only</option>
                      <option value="private">Private</option>
                    </select>
                  </div>
                  <ToggleSwitch
                    checked={privacy.activityStatus}
                    onChange={(e) => handlePrivacyUpdate("activityStatus", e.target.checked)}
                    label="Show Activity Status"
                  />
                  <ToggleSwitch
                    checked={privacy.dataSharing}
                    onChange={(e) => handlePrivacyUpdate("dataSharing", e.target.checked)}
                    label="Allow Data Sharing"
                  />
                  <ToggleSwitch
                    checked={privacy.analyticsTracking}
                    onChange={(e) => handlePrivacyUpdate("analyticsTracking", e.target.checked)}
                    label="Analytics Tracking"
                  />
                </div>
              </div>
            )}

            {/* Preferences Tab */}
            {activeTab === "preferences" && (
              <div className="card">
                <h2 className="text-xl font-semibold text-primary mb-6">System Preferences</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                    <select
                      value={preferences.theme}
                      onChange={(e) => handlePreferenceUpdate("theme", e.target.value)}
                      className="input-field"
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="auto">Auto</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                    <select
                      value={preferences.language}
                      onChange={(e) => handlePreferenceUpdate("language", e.target.value)}
                      className="input-field"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                    <select
                      value={preferences.timezone}
                      onChange={(e) => handlePreferenceUpdate("timezone", e.target.value)}
                      className="input-field"
                    >
                      <option value="UTC-8">Pacific Time (UTC-8)</option>
                      <option value="UTC-5">Eastern Time (UTC-5)</option>
                      <option value="UTC+0">GMT (UTC+0)</option>
                      <option value="UTC+1">Central European (UTC+1)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
                    <select
                      value={preferences.dateFormat}
                      onChange={(e) => handlePreferenceUpdate("dateFormat", e.target.value)}
                      className="input-field"
                    >
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="flex justify-end mt-8">
              <button onClick={handleSaveSettings} className="btn-primary">
                Save All Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
