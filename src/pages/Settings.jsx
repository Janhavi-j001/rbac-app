import React from "react";

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div>
        <h2 className="text-lg font-semibold mb-2">Account Settings</h2>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default Settings;
