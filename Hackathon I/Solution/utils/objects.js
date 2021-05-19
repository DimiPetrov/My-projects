/* eslint-disable valid-jsdoc */
/* eslint-disable guard-for-in */
/* eslint-disable max-len */

// easy
/**
 * Checks if the property exists in a given object
 *
 * @param {obj} obj the object to be searched in
 * @param {prop} prop the property that is being searched
 * @returns {boolean} if the prop exists in the obj => true, else =>false
 */
const existInObject = (obj, prop) => {
  if (!(obj instanceof Object) || (obj instanceof Array)) {
    throw new Error('Expected the first argument to be an instance of Object');
  }

  if (typeof prop !== 'string') {
    throw new Error('Expected the second argument to be of type string');
  }

  return prop in obj;
};

/**
  * to remove a property from an object we have to
  * @param {object} object The object to search in.
  * @param {string} string delete the certain property
  * @return {object} An object with the specific prop deleted.
*/
const removeProp = (obj, prop) => {
  // here we talked about this solution and I just re-created it

  if (!(obj instanceof Object) || (obj instanceof Array)) {
    throw new Error('Expected the first argument to be an instance of Object');
  }

  if (typeof prop !== 'string') {
    throw new Error('Expected the second argument to be of type string');
  }

  delete obj[prop];
  return obj;
};

// medium
/**
 * Creating a shallow copy of a given object
 * @param {obj} obj the object to copy
 * @param {obj} obj1 the copied object, that is logged
 */
const copy = (obj) => {
  if (!(obj instanceof Object) || (obj instanceof Array)) {
    throw new Error('Expected the argument to be an instance of Object');
  }

  const objCopy = obj;
  return objCopy;
};

/**
 * Types of object properties
 *
 * @param {obj} object The object to extract the prop types from
 * @return {array} a new array of types of properties
 */
const typeOfProps = (obj) => {
  if (!(obj instanceof Object) || (obj instanceof Array)) {
    throw new Error('Expected the argument to be an instance of Object');
  }

  const arrayOfPropTypes = [];

  for (const key in obj) {
    arrayOfPropTypes.push(typeof obj[key]);
  }
  return arrayOfPropTypes;
};

// hard

/**
 * Flat all of the inner objects (just one level deep) inside of a given object, placing their own properties on root level. See the format from the example.
 *
 * @param {object} object The object to be flatten.
 * @return {object} The flatten object.
 */
const flat = (obj) => {
  if (!(obj instanceof Object) || (obj instanceof Array)) {
    throw new Error('Expected first argument to be an instance of Object');
  }

  const flattedObj = {};
  for (const keyOne in obj) {
    if ((obj[keyOne] instanceof Object)) {
      for (const keyTwo in obj[keyOne]) {
        const prop = `${keyOne}.${keyTwo}`;
        flattedObj[prop] = obj[keyOne][keyTwo];
      }
    } else {
      flattedObj[keyOne] = obj[keyOne];
    }
  }

  return flattedObj;
};

/**
 * Extract all of the entries (key-value pairs) from a given object.
 *
 * @param {object} object The object to extract the entries from.
 *
 * @return {array} An array of the entries in the format [key, value];
 */
const entries = (obj) => {
  if (!(obj instanceof Object)) {
    throw new Error('Expected first argument to be an instance of Object');
  }

  // empty array to return which we will fill with the keys and their respected values, and then return
  const arr = [];

  // for...in loop to iterate over the object
  for (const key in obj) {
    // in the for...in loop, we push every key value pair as a single array in the bigger array

    // the position of the key and the value in the nested arrays is important!
    arr.push([key, obj[key]]);
  }

  // returning the filled array
  return arr;
};

export { existInObject, typeOfProps, copy, removeProp, flat, entries };
