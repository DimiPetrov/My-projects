/* eslint-disable valid-jsdoc */
/* eslint-disable guard-for-in */
/* eslint-disable max-len */

// easy ME

/**
 * Reverse an array
 *
 * @param {array} array the array to be reversed
 * @return {array} a new reversed copy of the array
 */
const reverse = (array) => {
  const reversed = [];
  if (!(array instanceof Array)) {
    throw new Error('The input should be an array');
  }
  for (let index = array.length - 1; index >= 0; index--) {
    reversed.push(array[index]);
  }
  return reversed;
};

const fill = (array, value, start = 0, end = array.length) => {
  const filled = array.slice();
  if (!(array instanceof Array)) {
    throw new Error('An array should be put as a first argument');
  }
  if (typeof start !== 'number' || typeof end !== 'number') {
    throw new Error('The start and end should be numbers');
  }
  for (let index = start; index < end; index++) {
    filled[index] = value;
  }

  return filled;
};

// medium

/**
 * Converts all elements in array into a string separated by separator.
 *
 * @param {array} array The array to convert
 * @param {separator} separator The element separator
 * @return {string} Returns the joined string
 */
const join = (array, separator = ',') => {
  let str = '';
  if (!(array instanceof Array)) {
    throw new Error('The first argument must be an array');
  }
  if (!(typeof separator === 'string')) {
    throw new Error('The second argument must be a string');
  }
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      str = array[i];
    } else {
      str = str + separator + array[i];
    }
  }

  return str;
};

/**
 * Finds and returns the index of the searched element in the array. If the element does not exist in the array, return -1.
 *
 * @param {array} array Array in which to search for matches.
 * @param {any} any The element to search for.
 *
 * @return {number} The found index or -1.
 */
const indexOf = (array = [], element) => {
  if (!(array instanceof Array)) {
    throw new Error('Our input should be an array');
  }
  // we loop through the array until we find a matching element (if any) to the given one
  for (let i = 0; i < array.length; i++) {
    // during each iteration we check if the element from the array with index - i is strictly equal to the passed element from the input
    if (array[i] === element) {
      // in the case we find a match, we return the index - i (the built-in funtion of the Arrays is made like this - returning the index of the first match)
      return i;
    }
  }

  // if there are no matches, we return -1;
  return -1;
};

// hard

const filter = (array, predicate) => { // Mark
  let j = 0; // used for number of element in the new array.
  if (!(array instanceof Array)) {
    throw new Error('The first argument must be of type array');
  }
  if (typeof predicate !== 'function') {
    throw new Error('The second argument must be of type function');
  }
  for (let i = 0; i < array.length; i++) {
    const value = array[i]; // we take an element of the array to check.
    if (predicate(value, i, array)) array[j++] = value;
    /* Checking if predicate is true if predicate is true, it adds the current element of the array as the next element of the new array. Predicate is used as a callback function */
  }
  array.length = j;
  // Value of j is taken from [j++] we use j++ to start from element 0 and then add 1 for the next element in the array.
  return array;
};

// Mark, do NOT test the functions here. Have a separate file in separate directories away from the repo.
// const array = [6, 5, 0, 0, 2, 1];
// console.log(filter(array, (x) => x % 2 === 0));


/**
 * Creates a new array out of the supplied arrays by pairing up equally-positioned items
 * from all of the passed arrays. The returned array is truncated to the length
 * of the shortest of the provided arrays.
 *
 * @param {array} arrays arrays to be zipped from
 * @return {array} array containing the zipped arrays
 */
const zip = (...arrays) => {
  let min = Infinity;
  if (!(arrays instanceof Array)) {
    throw new Error('An array is needed as an input');
  }
  for (let i = 0; i < arrays.length; i++) {
    const minLength = arrays[i].length;
    if (minLength < min) {
      min = minLength;
    }
  }
  // in case there were no arrays passed to our function
  // min value would still be Infinity so to prevent an infinite loop
  // we just return an empty array
  if (min === Infinity) {
    return [];
  }

  const zipped = [];
  for (let j = 0; j < min; j++) {
    const currentArray = [];
    for (const arr of arrays) {
      currentArray.push(arr[j]);
    }
    zipped.push(currentArray);
  }

  return zipped;
};


export {
  reverse,
  fill,
  join,
  indexOf,
  filter,
  zip,
};
