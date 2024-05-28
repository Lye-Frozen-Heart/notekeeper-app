/**
 * This function checks if a given value is included in the provided enum values.
 * @param {any} value - The value to check.
 * @param {Array} enumValues - An array of valid enum values.
 * @returns {boolean} - Returns true if the value is in the enum values, otherwise false.
 * An AI was used to develop this function
 */
export const validateEnum = (value, enumValues) => {
  return enumValues.includes(value);
};
