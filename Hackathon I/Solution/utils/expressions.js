/* eslint-disable valid-jsdoc */
/* eslint-disable guard-for-in */
/* eslint-disable max-len */

// easy
// if the length of a string is bigger than the minimum length, returns true.
const isMinLength = (str, minLength) => (str.length > minLength) ? true : false; // Mark

const isMaxLength = (str, maxLength) => (str.length <= maxLength) ? true : false; // Dimitar

// medium

/**
 * Search for a given value inside an array.
 *
 * @param {value} value The value to search for.
 * @param {possibleValues} array The array to search into.
 * @return {boolean} Returns true if the validation passes and false if it doesn't.
 */
const isIn = (value, possibleValues) => possibleValues.includes(value);

/**
 * Checks if all of the elements in the array are of given type
 *
 * @param { array }  arr The array to check
 * @param { string } type The type the elements against
 * @return {boolean} if all elements are of the given type => true . Else => false
 */
const isArrayOfType = (arr, type) =>
  arr.every((element) => typeof element === type);

// hard
/**
 * Checks if all of the elements in the array are numbers
 *
 * @param {array} stringNumbers The array to check
 * @return {boolean} if all elements are valid numbers => true, else => false
 */

const areValidNumbers = (stringNumbers) => stringNumbers.every((str) => !isNaN(Number(str)));

/**
 * From a given string of separated numbers by a single space, sum the numbers and return the accumulated sum.
 *
 *@param { string } string the string of numbers, separated by a single space.
 *@return { number } returns the sum of all numbers from the string
 */
const sumNumbersFromString = (string) => string.split(' ').map(Number).reduce((acc, curr) => acc + curr, 0);
// Mihail

export {
  isMinLength,
  isMaxLength,
  isIn,
  isArrayOfType,
  areValidNumbers,
  sumNumbersFromString,
};
