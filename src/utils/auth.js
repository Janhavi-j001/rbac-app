/**
 * Save a new user to localStorage.
 * @param {object} user - The user object containing details like email and password.
 */
export const saveUser = (user) => {
  try {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  } catch (error) {
    console.error(`Error saving user to localStorage: ${error}`);
  }
};

/**
 * Other functions already defined here...
 */

export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find((user) => user.email === email && user.password === password);
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return true;
  }
  return false;
};

export const logoutUser = () => {
  localStorage.removeItem('currentUser');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser'));
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('currentUser');
};
