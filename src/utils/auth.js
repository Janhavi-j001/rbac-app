// auth.js

// Save user during signup
export const saveUser = ({ email, password, role }) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = users.some((u) => u.email === email);

  if (userExists) {
    alert("User already exists. Please login.");
    return false;
  }

  // Add the new user
  users.push({ email, password, role });
  localStorage.setItem("users", JSON.stringify(users));
  return true;
};

// Log in user
export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user)); // Save logged-in user
    return true;
  }
  return false; // Invalid login credentials
};

// Get current user
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser")); // Retrieve current user
};

// Clear current user (Logout)
export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};
// auth.js

export const isAuthenticated = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return !!currentUser; // Returns true if a user is logged in, otherwise false
};
