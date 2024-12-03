/**
 * Save data to localStorage.
 * @param {string} key - The key to store the data under.
 * @param {any} value - The data to store.
 */
export const saveToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving data to localStorage: ${error}`);
  }
};

/**
 * Get data from localStorage.
 * @param {string} key - The key to retrieve data for.
 * @returns {any} The retrieved data or null if not found.
 */
export const getFromLocalStorage = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(`Error getting data from localStorage: ${error}`);
    return null;
  }
};

/**
 * Remove data from localStorage.
 * @param {string} key - The key to remove data for.
 */
export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing data from localStorage: ${error}`);
  }
};

/**
 * Clear all data from localStorage.
 */
export const clearLocalStorage = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error(`Error clearing localStorage: ${error}`);
  }
};
