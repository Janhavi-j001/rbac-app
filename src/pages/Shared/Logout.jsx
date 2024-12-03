import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../utils/auth";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} style={{ padding: "10px", background: "#ff4c4c", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
      Logout
    </button>
  );
};

export default Logout;
