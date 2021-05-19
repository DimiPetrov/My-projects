/* eslint-disable no-labels */
/* eslint-disable valid-jsdoc */
/* eslint-disable guard-for-in */
/* eslint-disable max-len */

// easy
/**
 * Extracts a section from a string
 *
 * @param {string} string the string to slice from
 * @param {number} start the index of which we want to start slicing
 * @param {number} end the index of which we want to stop slicing
 * @returns {string} the sliced portion of the original string
 */
const slice = (string, start = 0, end = string.length) => {
  if (typeof string !== 'string') {
    throw new Error('The first argument in the input must be of type string!');
  }

  if (typeof start !== 'number' || typeof end !== 'number') {
    throw new Error('The start and end must be of type number!');
  }

  let result = '';
  // here i wasn't declared with 'let', so I added it
  for (let i = start; i < end; i++) {
    result += string[i];
  }
  return result;
};

/**
 * Repeats the given string n times.
 *
 * @param {string} string The string to repeat.
 * @param {n} number The number of times to repeat the string.
 * @returns {string} Returns the repeated string.
 */

const repeat = (string, n) => {
  if (typeof string !== 'string') {
    throw new Error('The first argument in the input must be of type string!');
  }

  if (typeof start !== 'number' || typeof end !== 'number') {
    throw new Error('The secod argument - n, should be of type number!');
  }

  let result = '';

  for (let i = 0; i < n; i++) {
    result += string;
  }

  return result;
};

// medium

/**
 * Converts the first character of string to upper case and the remaining to lower case.
 *
 * @param {string} string The string to capitalize.
 *
 * @return {string}  Returns the capitalized string.
 */
const capitalize = (string = '') => {
  if (typeof string !== 'string') {
    throw new Error('The first argument in the input must be of type string!');
  }

  // * object in which we'll store the indexes of the letters (values) - while the keys will be used for the capitalization
  const upperCaseLettersAZ = {};
  const upperCaseArr = [];
  const lowerCaseLettersAZ = {};
  const lowerCaseArr = [];

  // * create a look alike DB for the indexes of all upper and lower case letters
  for (let i = 0; i < 26; i++) {
    upperCaseLettersAZ[String.fromCharCode(65 + i)] = i;
    upperCaseArr.push(String.fromCharCode(65 + i));
    lowerCaseLettersAZ[String.fromCharCode(97 + i)] = i;
    lowerCaseArr.push(String.fromCharCode(97 + i));
  }

  // * create a new empty string to avoid mutation of the string that the user inputs
  let capitalizedString = '';

  // * looping through the string to check if some characters need to be made lower case
  for (let i = 0; i < string.length; i++) {
    const currChar = string[i];

    /*
     * these variables will be used to: first - get the index from the upper/lower objects
     * and then get the value of the element on that index
     */
    const charIndexForUpper = upperCaseLettersAZ[currChar];
    const charIndexForLower = lowerCaseLettersAZ[currChar];

    // * checking if the currChar is a space
    if (currChar !== ' ') {
      // * checking if upper or lower case for a current char
      if (currChar.charCodeAt(0) >= 97 && currChar.charCodeAt(0) <= 122) {
        if (i === 0) {
          capitalizedString += upperCaseArr[charIndexForLower];
        } else {
          capitalizedString += currChar;
        }
      } else if (currChar.charCodeAt(0) >= 65 && currChar.charCodeAt(0) <= 90) {
        if (i !== 0) {
          capitalizedString += lowerCaseArr[charIndexForUpper];
        } else {
          capitalizedString += currChar;
        }
      }
    } else {
      capitalizedString += currChar;
    }
  }

  return capitalizedString;
};

/**
 * Replaces matches for pattern in string
 *
 * @param {string} array the given string
 * @param {string} char the simbol to be replaced
 * @param {string} replacement the replacement to char
 * @return {strin} a new string with replaced char
 */
const replace = (string, char, replacement) => {
  if (typeof string !== 'string' || typeof char !== 'string' || typeof replacement !== 'string') {
    throw new Error('The first argument in the input must be of type string!');
  }

  const splittedString = string.split(' ');
  let replacedString = '';

  for (let i = 0; i < splittedString.length; i++) {
    if (splittedString[i] === char) {
      replacedString += `${replacement} `;
    } else {
      replacedString += `${splittedString[i]} `;
    }
  }

  return replacedString.trim();
};

// hard
/**
 * Splits string by a separator
 *
 * @param {string} string the string we have to split
 * @param {string} separator the separator character to split by
 * @return {Array} returns the string segments
 */
const split = (string, separator) => {
  if (typeof string !== 'string' || typeof separator !== 'string') {
    throw new Error('The first argument in the input must be of type string!');
  }

  const startingArr = Array.from(string);
  const splittedArr = [];
  let currChar;
  let isNextTrue = false;

  let currString = '';

  outer: for (let i = 0; i < startingArr.length; i++) {
    while (startingArr[i] !== separator) {
      currString += startingArr[i];
      i++;
      if (i >= startingArr.length) {
        splittedArr.push(currString)
        break outer;
      }
    }

    currChar = startingArr[i];

    if (currChar === startingArr[i - 1]) {
      isNextTrue = true;
    }

    if (currChar === separator && !isNextTrue) {
      splittedArr.push(currString);
      currString = '';
      isNextTrue = false;
    } else if (currChar === separator && isNextTrue) {
      while (startingArr[i] === separator) {
        splittedArr.push('');
        i++;
      }
      currString = '';
      i--;
      isNextTrue = false;
    }
  }
  return splittedArr;
};

// Mihail

const trim = (string) => {
  if (typeof string !== 'string') {
    throw new Error('The first argument in the input must be of type string!');
  }

  let startIndex = 0;
  // when startIndex is on a position of a character
  // different from whitespace that is where we want
  // our actual trimmed string to start from
  while (string[startIndex] === ' ') {
    startIndex++;
  }

  // when endIndex is on a position of a character
  // different from whitespace that is where we want
  // our actual trimmed string to end
  let endIndex = string.length - 1;
  while (string[endIndex] === ' ') {
    endIndex--;
  }

  // in case of a fully empty string startIndex will become
  // string.length and endIndex would become -1
  // so to catch an empty string or one with
  // empty spaces only we check if the start index has
  // surppassed the endIndex
  if (startIndex >= endIndex) {
    return '';
  }

  let trimmedString = '';
  for (let i = startIndex; i <= endIndex; i++) {
    trimmedString += string[i];
  }

  return trimmedString;
};
export {
  slice,
  repeat,
  capitalize,
  replace,
  split,
  trim,
};
