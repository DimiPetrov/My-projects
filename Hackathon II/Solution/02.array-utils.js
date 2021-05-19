// easy

/**
 * Add an element at front of the array
 * @author Mihail Enev
 * @param {any} element the element to add
 * @return {innerAddFirst} inner function
 */
const addFirst = (element) => (arr) => [element].concat(...arr);
/**
 * @param {array} arr an array to add element into
 * @return {array} a copy of the array with the element added
 */

/**
 * @author Mark Yosifov
 * Removes the first elements from an array.
 * @param {array} arr The array that we will remove the fist element from
 * @return {function} eturns a closure that will create a copy of
 *  the array with the first element removed.
 */
const removeFirst = (arr) => {
  const [, ...rest] = arr;
  return rest;
};

/**
 * @author Dayana Kirilova
 *
 * Add an element at the back of the array
 *
 * @param {any} element The element to add on last position
 * @return {function} Returns a closure that will create a
 *  copy of the array with the new element at back
 */
const addLast = (element) => {
  return (arr) => {
    const newArr = [...arr, element];
    return newArr;
  };
};

/**
 * @author Tsvetelina Kyoseva
 * Removes the last element of array
 * @param {array} arr an array to remove element from
 * @return {removeLastFunc} inner function
 */
const removeLast = (arr) => arr.slice(0, arr.length - 1);
/**
 * @function removeLastFunc
 * @param {array} arr an array to remove element from
 * @return {array} a copy of the array with the removed element
 */

/**
 * @author Zhulien Zhivkov
 *
 * Get the array's valid indexes.
 *
 * @param {array} arr The array to get the indexes from
 * @return {array} Returns new array with the valid indexes.
 */
const keys = (arr = []) => {
  if (!arr instanceof Array) {
    throw new Error('Please, enter a valid input - array!');
  }

  if (arr.some((el) => typeof el !== 'function')) {
    throw new Error(`Please, make sure all of your array elements 
      are of type function!`);
  }

  return arr.reduce((acc, curr, index) => {
    if (curr) {
      acc.push(index);
    }
    return acc;
  }, []);
};

//
/**
 * @author Dimitar Petrov
 *  Get the array's entries in the form of key-value pairs [index, element].
 *
 * @param {array} arr The array to get the entries from
 * @return {array} Returns a new array with the valid entries
 * in the form [index, element].
 */

const entries = (arr) => {
  return arr.reduce((acc, curr, index) => {
    acc.push([index, curr]);
    return acc;
  }, []);
};

/**
 * @author Ivan Cerovski
 * Creates a copy of an array from the start to the end index.
 *
 * @param {number} start The START index of the array to copy from.
 * @param {number} end The END index of the array to copy from.
 *
 * @return {array} Returns a closure that will create a copy of
 * the array from the start to the end index.
 *
 */
const slice = (start, end) => {
  return (arr) => {
    return arr.reduce((acc, cur, index, array) => {
      if (index >= start && index <= end) {
        acc.push(cur);
      }

      return acc;
    }, []);
  };
};

/**
 * @author Mihail Enev
 *
 * Concatenates the elements from one array with the elements of another
 * creating a result array with all the elements.
 *
 * @param {array} arr The array to get the indexes from
 * @return {array} Returns new array with the valid indexes.
 */
const concat = (arr) => {
  let result;
  const innerConcat = (innerArr) => {
    return (result = [...arr, ...innerArr]);
  };
  return innerConcat;
};
// medium

/**
 * @author Mark Yosifov
 * Reverses the elements in a given array.
 * @param {array} arr Elements of the array.
 * @return {(array) => array} Returns a new array with reversed elements.
 */

const reverse = (arr) => arr.map((item, index) => arr[arr.length - 1 - index]);

/**
 * @author Dayana Kirilova
 *
 * Converts all elements in array into a string separated by separator.
 *
 * @param {string} separator The element to add
 * @return {function} Returns a closure that will
 * join the elements of the array with the passed separator
 */
const join = (separator) => {
  return (arr) => {
    const reduced = arr.reduce((acc, currentElement, index) => {
      const concatedEl = acc.concat(currentElement.toString());
      if (index < arr.length - 1) {
        const concatedSeparator = concatedEl.concat(separator);
        return concatedSeparator;
      }

      return concatedEl;
    }, '');

    return reduced;
  };
};

/**
 * @author Tsvetelina Kyoseva
 * Finds the first element in an array using a predicate function or
 * returns null if it fails
 * @param {function} predicate  predicate func
 * @return {findFunc} inner function or @return {null} if it fails
 */
const find = (predicate) => (arr) => arr.filter(predicate)[0] || null;
/**
 * @function findFunc
 * @param {array} arr array to be searched
 * @return {any}  first value that meets the predicate or null
 */

/**
 * @author Zhulien Zhivkov
 *
 * Fills elements of array with value from start up to, but not including, end.
 *
 * @param {any} value The value to fill array with.
 * @param {number} start The start position.
 * @param {number} end The end position.
 * @return {fillFunc} Returns a closure that will
 * fill the passed array with the value.
 */
const fill = (value, start, end) => {
  if (typeof start !== 'number' || typeof end !== 'number') {
    throw new Error(`Please, make sure your start and end 
    values are of type number!`);
  }

  /**
   * @function fullArrayFunc
   * @param {array} arr An array to copy and fill with the value
   * @return {array} A copy of the array with the new values on index positions
   */
  return (arr = []) => {
    if (!arr instanceof Array) {
      throw new Error('Please, enter a valid input!');
    }

    const mutatedArray = [];

    const fromZeroToStart = [...arr.slice(0, start)];
    const valueArr = [...arr.slice(start, end)].map((el) => (el = value));
    const fromEndToEnd = [...arr.slice(end)];

    mutatedArray.push(...fromZeroToStart, ...valueArr, ...fromEndToEnd);

    return mutatedArray;
  };
};

/**
 * @author Dimitar Petrov
 * Flip a function's order of parameters.
 * @param {function} fn The function to flip the parameter for.
 * @return {array} args  Returns a closure that will accept any
 * number of parameters and will call the initial function with
 * the parameters in reverse order.
 */

const flip = (fn) => {
  return (...args) => {
    const flippedArr = args.reduceRight((acc, current) => {
      acc.push(current);
      return acc;
    }, []);
    return fn(...flippedArr);
    // added spread operator to spread arguments back - Dayana
  };
};

/**
 * @author Ivan Cerovski
 * Call a function with each of the elements of an array as a parameter.
 *
 * @param {function} fn the function to call with the elements.
 *
 * @return {void} Returns a closure that will iterate over the passed array and
 * will call the received function with each of the elements.
 * This function does not return anything.
 */
const forEach = (fn) => {
  return (arr) => {
    return arr.reduce((acc, cur) => {
      acc.push(fn(cur));
      return acc;
    }, []);
  };
};

/**
 * @author Mihail Enev
 *
 * Transform each of the elements of an array using a mapping function.
 *
 * @param {function} fn The mapping function to call with the elements.
 * @return {function} Returns a closure that will iterate over the passed array
 * and will call the received mapping function with each of the elements.
 * Collect the results of the mapping function callings
 * and return it as a new array.
 */
const map = (fn) => {
  const innerMapFunc = (arr) => {
    const mapArr = [];
    for (const i of arr) {
      const result = fn(arr[i]);
      mapArr.push(result);
    }
    return mapArr;
  };
  return innerMapFunc;
};

/**
 * @author Mark Yosifov
 * Finds the first element in an array using a predicate function
 * @param {function} predicate  predicate func
 * @return {filterFunc} Returns the filtered elements.
 */
const filter = (predicate) => {
  return (arr) => {
    const filteredArr = [];
    arr.map((element) => {
      if (predicate(element)) {
        filteredArr.push(element);
      }
    });
    return filteredArr;
  };
};

/**
 * @author Dayana Kirilova
 *
 * Iterates over elements of collection and reducing all of them
 * in a single value.
 *
 * @param {function} fn The reducer function that will accept an
 *  accumulator and the next element and will return the updated
 *  accumulator
 * @param {any} initialValue The accumulator's initial value
 * @return {function} Returns a closure that will iterate over
 *  the passed array and will call the received reducer function with
 *  the accumulator variable and the current element. Return the
 *  accumulator at the end.
 */
const reduce = (fn, initialValue) => {
  return (arr) => {
    let acc = initialValue;
    arr.forEach((element) => {
      acc = fn(acc, element);
    });

    return acc;
  };
};

/**
 * @author Tsvetelina Kyoseva
 * Iterates over elements of collection backwards and
 *  reducing all of them in a single value.
 * @param {function} fn  The reducer function
 * @param {any} initialValue  The accumulator's initial value
 * @return {reduceRightFunc} inner function
 */
const reduceRight = (fn, initialValue) => {
  /**
   * @function reduceRightFunc
   * @param {array} arr array to be 'reduced'
   * @return {any}  Return the accumulator at the end
   */
  return (arr) => {
    let acc = initialValue;
    reverse(arr).map((el) => (acc = fn(acc, el)));
    return acc;
  };
};

/**
 * @author Zhulien Zhivkov
 *
 * Iterates over elements of a collection and returns true if at least one of
 * them passes the predicate function's condition. Otherwise return false.
 *
 * @param {function} predicate A function that accepts one parameter
 * and returns a boolean value.
 * @return {findFirstTrue} Returns a closure that will iterate over the passed
 * array in and will call the received predicate function with each of the
 * elements.
 */
const some = (predicate) => {
  if (typeof predicate !== 'function') {
    throw new Error('Please, make sure that your input is valid function!');
  }

  /**
   * @function findFirstTrue
   * @param {array} arr An array to iterate over
   * @return {boolean} Return true if one of the elements pass the conditions
   * of the predicate and false if not of the conditions pass.
   */
  return (arr = []) => {
    if (!arr instanceof Array) {
      throw new Error('Please, enter a valid input!');
    }

    return arr.findIndex((currEl) => predicate(currEl)) !== -1 ? true : false;
  };
};

/**
 * @author Dimitar Petrov
 *
 * Iterates over elements of a collection and returns true if each of
 * them passes the predicate function's condition. Otherwise return false.
 *
 * @param {function} predicate A function that accepts one parameter
 * and returns a boolean value.
 * @return {findAllTrue} Returns a closure that will iterate over the passed
 * array in and will call the received predicate function with each of the
 * elements.
 */
const every = (predicate) => {
  if (typeof predicate !== 'function') {
    throw new Error(`Please, make sure that your input is valid function!`);
  }

  /**
   * @function findAllTrue
   * @param {array} arr An array to iterate over
   * @return {boolean} Return true if each of the elements pass the conditions
   * of the predicate. Otherwise return false.
   */
  return (arr = []) => {
    if (!arr instanceof Array) {
      throw new Error(`Please, enter a valid input!`);
    }

    const result = arr.find((el) => !predicate(el));

    if (result) {
      return false;
    }

    return true;
  };
};

/**
 * @author Ivan Cerovski
 * Iterates over elements of a collection and returns true
 * if the searched element is one of them. Otherwise return false.
 *
 * @param {any} element The element to search for.
 * @return {boolean} Returns a closure that will iterate over the passed array
 * and will check if the searched element is there. If it is there,
 * return true, otherwise return false.
 */
const includes = (element) => {
  return (arr) => {
    return arr.some((cur) => element === cur);
  };
};

/**
 * @author Mihail Enev
 *
 * Finds and returns the index of the searched element in the array.
 * If the element does not exist in the array, return -1.
 *
 * @param {element} searchedElement The element to search for.
 * @return {function} Returns a closure that will
 *  iterate over the passed array in
 *  and will check if the searched element is there.
 * If its there return its index, otherwise return -1.
 */
const indexOf = (searchedElement) => {
  const innerFunc = (arr) => {
    return arr.findIndex((currEl) => currEl === searchedElement);
  };
  return innerFunc;
};

/**
 * @author Mark Yosifov
 *
 * Returns the index of the first element in the array that
 * satisfies the provided testing function.
 * If the element does not exist in the array, return -1.
 * @param {element} predicate The element to check.
 * @return {function} Returns the index of the required element;
 *
 */
const findIndex = (predicate) => {
  return (arr = []) => {
    const searchElement = arr.find((element) => predicate(element));
    return arr.indexOf(searchElement);
  };
};

// hard

/**
 * @author Dayana Kirilova
 *
 * Creates an array from object by using its length property.
 *
 * @param {object} length  An object that has the length property.
 * @return {array} Returns the created array with length equal to the
 * passed object's length property, filled with undefined values.
 */
const arrayFrom = ({ length }) => new Array(length).fill(undefined);

/**
 * @author Tsvetelina Kyoseva
 * Accepts any number of functions and creates a sequence where the
 * output of the last function becomes the input for the next.
 * @param {array} (...fns) The functions to pipe
 * @return {pipeFunc} inner function
 */
/**
 * @function pipeFunc
 * @param {any} input
 * @return {any} At the end, return the result of the final
 *  one. The input for the first function will be passed
 *  as a parameter to the closure
 */
const pipe = (...fns) => (input) => fns.reduce((acc, cur) => cur(acc), input);

/**
 * @author Zhulien Zhivkov
 *
 * Accepts any number of functions and creates a sequence where the output of
 * the last function becomes the input for the next. It runs trough the
 * functions in **reverse** order.
 *
 * @param {array} arrayOfFuncs Array of the the functions to compose.
 * @return {composeEls} Returns a closure that will iterate over the
 * passed array of functions and will call the each of them in with the
 * output of the last reverse order
 */
const compose = (...arrayOfFuncs) => {
  if (!arrayOfFuncs instanceof Array) {
    throw new Error('Please, enter a valid input - array!');
  }

  if (arrayOfFuncs.some((el) => typeof el !== 'function')) {
    throw new Error(`Please, make sure all of your array elements 
      are of type function!`);
  }

  /**
   * @function composeEls
   * @param {any} input The element to be run through the functions
   * @return {any} The input after all of the operations done on him
   */
  return (input) => {
    if (!input) {
      throw new Error('Please, make sure your input is valid!');
    }

    return arrayOfFuncs.reverse().reduce((acc, curr) => curr(acc), input);
  };
};

/**
 * @author Dimitar Petrov
 *  Create a copy of the array and replace any inner array
 * element with all of its own elements. It goes just one level deep.
 * @param {array} arr The array to flat.
 * @return {array} Returns the flatten array - all of the inner
 * array elements are replaced by their own elements.
 */
const flat = (arr) => {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(...[curr]);
    }
    return acc.concat(curr);
  }, []);
};

/**
 * @author Ivan Cerovski
 *
 * Transform each of the elements of an array
 * using a mapping function. The mapping function must always
 * return an array. Flat the array of arrays after the mapping
 * function and return the result.
 *
 * @param {function} mapperFn The mapping function. It must return an array.
 *
 * @return {array} Returns a closure that will iterate over the passed array
 * and will call the mapping function with each of the elements.
 * Flat the result of the mapping and return it.
 */
const flatMap = (mapperFn) => {
  return (arr) => {
    return arr.reduce((acc, cur) => acc.concat([mapperFn(cur)]), []);
  };
};

// 29

/**
 * @author Zhulien Zhivkov
 *
 * Creates an array of grouped elements, the first of which
 * contains the first elements of the given arrays, the second
 * of which contains the second elements of the given arrays,
 * and so on. The array of groups is as long as the smallest
 * passed array.
 *
 * @param {array} zipArrays The arrays to zip with.
 * @return {zipInFunc} Returns a closure that will iterate over
 * the passed array and will zip it with the previously passed arrays.
 * Return an array of the zipped pairs in the form of inner arrays.
 */
const zip = (...zipArrays) => {
  /**
   * @function zipInFunc
   * @param {array} arr The array to concatenate with the arrays from
   * the input
   * @return {array} The array with the grouped arrays
   */
  return (arr) => {
    // ! smallest passed array
    const concatedArrs = []
        .concat([arr], ...zipArrays)
        .sort((a, b) => a.length - b.length);
    const minimumArrByLength = concatedArrs[0];

    return minimumArrByLength.reduce((acc, _, index) => {
      acc.push(
          concatedArrs.reduce((inVal, curInVal) => {
            // ? [[1, 1, a], [2, 3, b]]
            inVal.push(curInVal[index]);
            return inVal;
          }, [])
      );
      return acc;
    }, []);
  };
};

// 30

/**
 * @author Zhulien Zhivkov
 *
 * Creates an object that will group the array values by a passed
 * grouping function. The object keys will be all of the unique
 * groupings and the values will be an array of the group entries.
 *
 * @param {function} groupingFn The grouping function. It will
 * accept an element and return the group identifier.
 * @return {findFirstTrue} Returns a closure that will iterate
 * over the passed array and will call the grouping function
 * with each of the elements. The grouping function will return
 * the unique group identifier for each of them and this will be
 * the key for the result object. The values will be arrays of the
 * group members.
 */
const groupBy = (groupingFn) => {
  /**
   * @function groupByIdentifier
   * @param {array} arr The array to iterate over
   * @return {object} The object that will have all unique groupings
   */
  return (arr) => {
    return arr.reduce((acc, curr) => {
      const groupIdentifier = groupingFn(curr);
      if (!acc[groupIdentifier]) {
        acc[groupIdentifier] = [];
      }
      acc[groupIdentifier].push(curr);
      return acc;
    }, {});
  };
};

export {
  addFirst,
  removeFirst,
  addLast,
  removeLast,
  keys,
  entries,
  slice,
  concat,
  reverse,
  join,
  find,
  fill,
  flip,
  forEach,
  map,
  filter,
  reduce,
  reduceRight,
  some,
  every,
  includes,
  indexOf,
  findIndex,
  arrayFrom,
  pipe,
  compose,
  flat,
  flatMap,
  zip,
  groupBy,
};
