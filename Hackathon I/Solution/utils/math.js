/* eslint-disable no-shadow */
/* eslint-disable valid-jsdoc */
/* eslint-disable guard-for-in */
/* eslint-disable max-len */

// easy

/**
 * Returns the smallest number in the array.
 * @param {array} array The array of numbers.
 * @return {number} Returns the smallest.
 */
const min = (array) => {
  if (!(array instanceof Array)) {
    throw new Error('The input must be an array');
  }
  let minimum = array[0];
  for (let i = 0; i < array.length; i++) {
    const number = array[i];

    // check if the array is only of type numbers
    if (typeof number !== 'number') {
      throw new Error('The array must have elements of type number!');
    }

    minimum = number < minimum ? number : minimum;
  }
  return minimum;
};

/**
 * Returns the sum of all numbers in the array
 * @param {Array} array the Array of numbers that will be summed
 * @return {Number} returns the sum of the numbers
 */
const sum = (array) => {
  if (!(array instanceof Array)) {
    throw new Error('The input must be of type array');
  }
  let totalSum = 0;
  for (let i = 0; i < array.length; i++) {
    const number = array[i];

    // check if the array is only of type numbers
    if (typeof number !== 'number') {
      throw new Error('The array must have elements of type number!');
    }

    totalSum += number;
  }
  return totalSum;
};

// medium

/**
 * Returns the average of all numbers in the array.
 * The average is calculated by dividing the sum of all elements by the length of the array.
 *
 * @param {array} array The array of numbers.
 * @return {number} Returns the average.
 */
const average = (array) => {
  // if you keep it that way of defining this variable, you will get an error (undefined + something is equal to error)
  // let sum;
  if (!(array instanceof Array)) {
    throw new Error('The input must be an array');
  }
  let sum = 0;
  // array.forEach((element) => {
  //   sum = sum + element;
  // });
  for (let i = 0; i < array.length; i++) {
    const number = array[i];

    // check if the array is only of type numbers
    if (typeof number !== 'number') {
      throw new Error('The array must have elements of type number!');
    }

    sum += number;
  }

  return sum / array.length;
};

/**
 * Raises the number to the chosen power.
 *
 * @param {number} num The array of numbers.
 * @param {number} power The power by which the number should be raised.
 * @return {number} Returns the number raised by the power.
 */

const pow = (num, power) => {
  if (typeof num !== 'number' || typeof power !== 'number') {
    throw new Error('The two arguments must be of type number!');
  }
  return num ** power;
};
// hard
/**
 * Checks if a given number is prime number or not
 *
 * @param {number} number the number to be checked
 * @return {boolean} Return `true` if the number is a prime number and `false` if the number is not prime
 */
const isPrime = (number) => {
  if (typeof number !== 'number') {
    throw new Error('The input must be of type number!');
  }
  if (number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }

  if (number % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.floor(Math.sqrt(number)); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

// const isPrime = (number) =>{
//   for(var i = 2; i < num; i++) //Mark, second version
//     if(num % i === 0) return false;
//   return num > 1;
// }

/**
 * Swaps the whole part and the reminder part of a given number.
 *
 * @param {number} number The number to swap.
 *
 * @return {number} The number with the applied swapping
 */
const swapWholeAndRemainder = (number) => {
  if (typeof number !== 'number') {
    throw new Error('The array must have elements of type number!');
  }
  // still, I am not sure if I can use or not some of the built in functions, that's why I'm making it so large as a code

  // make the number to be of type string
  const numInStr = `${number}`;

  // creating the new empty string for the num, which later we will transform to a number
  let finalStr = '';

  // count will keep track of our indexes
  let count = 0;

  // currNum will be the current element on the current count number/index
  let currNum = numInStr[count];

  // getting the first half of the number (before the dot)
  let firstHalf = '';

  // loop while the current element is not dot '.'
  while (currNum !== '.') {
    firstHalf += currNum;
    count++;
    currNum = numInStr[count];
  }

  // getting to the next element with these 2 lines of code
  count++;
  currNum = numInStr[count];

  // getting the second half of the number (after the dot)
  let secondHalf = '';

  // loop while the current element is truthy (when falsy loop breaks)
  while (currNum) {
    secondHalf += currNum;
    count++;
    currNum = numInStr[count];
  }

  // concatenating the first and second half + the dot but in reversed way
  finalStr = `${secondHalf}.${firstHalf}`;

  // parse the final string (finalStr) and return it
  return +finalStr;
};

export {
  min,
  sum,
  average,
  pow,
  isPrime,
  swapWholeAndRemainder,
};
