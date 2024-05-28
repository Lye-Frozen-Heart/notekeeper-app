/**
 * This function checks if a given value has empty characters.
 * @param {string} value - The value to check.
 * @returns {boolean} - Returns true if the value has empty spaces.
 * An AI was used to develop this function
 */
export const validateNonEmpty = (value) => {
  return value.trim() !== "";
};
