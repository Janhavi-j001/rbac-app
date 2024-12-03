import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated, getCurrentUser } from "../utils/auth";

/**
 * ProtectedRoute component to handle authentication and role-based access control.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.element - The component to render if access is authorized.
 * @param {Array<string>} props.allowedRoles - Roles allowed to access this route.
 */
const ProtectedRoute = ({ element, allowedRoles }) => {
  const user = getCurrentUser();

  // Redirect to login if the user is not authenticated
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  // Redirect to unauthorized page if the user role is not allowed
  if (allowedRoles && (!user || !allowedRoles.includes(user.role))) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Render the component if authenticated and authorized
  return element;
};

export default ProtectedRoute;
