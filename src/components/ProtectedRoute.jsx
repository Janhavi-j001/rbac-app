import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth"; // Ensure this utility is implemented correctly

/**
 * ProtectedRoute component to restrict access to authenticated users.
 *
 * @param {Object} props
 * @param {React.Component} props.element - The component to render if the user is authenticated.
 */
const ProtectedRoute = ({ element }) => {
  // Check if the user is authenticated
  const auth = isAuthenticated();

  // Redirect to login if not authenticated
  return auth ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
