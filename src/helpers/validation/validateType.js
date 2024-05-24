/**
 * This function checks if the given value is equal to the specified type.
 *
 * @param {string} value - The value to check.
 * @param {string} type - The type to compare against.
 * @returns {boolean} - Returns true if the value matches the type, false otherwise.
 * An AI was used to develop this function
 */
export const validateType = (value, type) => {
  return typeof value === type;
};
