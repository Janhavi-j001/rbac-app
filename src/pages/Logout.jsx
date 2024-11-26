import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    // Clear authentication data if any (e.g., tokens)
    localStorage.removeItem("authToken"); // Example, adjust based on your app
    toast.success("Logout successful!");
    navigate("/login"); // Redirect to login page
  };

  return (
    <button
        style={{backgroundColor: "#8697c4"}}
      onClick={handleLogout}
      className="w-full text-left text-white px-4 py-2 rounded-md hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default Logout;
