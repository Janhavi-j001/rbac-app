/**
 * Utility functions for interacting with localStorage.
 */

/**
 * Save data to localStorage.
 * @param {string} key - The key under which the data will be stored.
 * @param {any} value - The value to store. It will be stringified if not a string.
 */
export const saveToLocalStorage = (key, value) => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error saving to localStorage: ${error}`);
    }
  };
  
  /**
   * Load data from localStorage.
   * @param {string} key - The key of the data to retrieve.
   * @returns {any} - The parsed value from localStorage or null if not found.
   */
  export const loadFromLocalStorage = (key) => {
    try {
      const serializedValue = localStorage.getItem(key);
      return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (error) {
      console.error(`Error loading from localStorage: ${error}`);
      return null;
    }
  };
  
  /**
   * Remove data from localStorage.
   * @param {string} key - The key of the data to remove.
   */
  export const removeFromLocalStorage = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing from localStorage: ${error}`);
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
  