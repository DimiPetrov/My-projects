/* eslint-disable valid-jsdoc */
/* eslint-disable guard-for-in */
/* eslint-disable max-len */

import * as utils from './utils/index.js';

// Arrays

const reverse = () => {
  const string = '1, 2, 3';
  const reversed = utils.reverse(string);

  console.log(reversed);
  // => Error: The input should be an array
  console.log(string);
  // => Error: The input should be an array

  const array = [1, 2, 3];
  const reversedArray = utils.reverse(array);

  console.log(reversedArray);
  // => [3, 2, 1]
  console.log(array);
  // => [1, 2, 3]

  const emptyArray = [];
  const reversedEmptyArray = utils.reverse(emptyArray);
  console.log(reversedEmptyArray);
  // => []
  console.log(emptyArray);
  // => []
};

const fill = () => {
  const array = [1, 2, 3];

  const filled = utils.fill(array, 'a');
  const filledNewArr = utils.fill(Array(3), 2);
  const filledInRange = utils.fill([4, 6, 8, 10], '*', 1, 3);

  console.log(filled);
  // => ['a', 'a', 'a']

  console.log(filledNewArr);
  // => [2, 2, 2]

  console.log(filledInRange);
  // => [4, '*', '*', 10]

  console.log(array);
  // => [1, 2, 3]
  // array is not changed!
};

const join = () => {
  const array = [1, 2, 3, 4, 5, 6];

  const test1 = utils.join(array, '~');
  console.log(test1);

  const test2 = utils.join(array);
  console.log(test2);

  const test3 = utils.join(['abc', 'def', 'ghi'], '/');
  console.log(test3);

  // const notAnArray
};

const indexOf = () => {
  const array1 = ['a', 'b', 'c'];

  console.log(utils.indexOf(array1, 'a')); // 0
  console.log(utils.indexOf(array1, 'd')); // -1
  console.log(utils.indexOf(array1, 'c')); // 2

  const array2 = [];

  console.log(utils.indexOf(array2, 'c')); // -1

  const array3 = 'array';

  console.log(utils.indexOf(array3, 'r')); // works for string
};

const filter = () => {
  const users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
  ];

  const filtered = utils.filter(users, (o) => !o.active);

  console.log(filtered);
  // => [{ 'user': 'fred', 'age': 40, 'active': false }]
};

const zip = () => {
  const zipped1 = utils.zip(['a', 'b'], [1, 2], [true, false]);

  console.log(zipped1); // => [['a', 1, true], ['b', 2, false]]
};

const arrays = () => {
  const separators = ['-', '_', '~'];
  const array = [1, 2, 3, 4, 5, 6];

  const filled = utils.fill(array, 0, 2, 4); // [1, 2, 0, 0, 5, 6]
  const reversed = utils.reverse(filled); // [6, 5, 0, 0, 2, 1]
  const filtered = utils.filter(reversed, (x) => x % 2 === 0); // [6, 0, 0, 2]
  const index = utils.indexOf(filtered, 6); // 0
  const joined = utils.join(filtered, separators[index]); // 6-0-0-2
  const zipped = utils.zip(array, joined.split('')); // [[1, 6], [2, -], [3, 0], [4, -], [5, 0], [6, -]]

  console.log(zipped);
};

// Math

const min = () => {
  console.log(utils.min([-23, 100, 0, -40, 99])); // -40
  console.log(utils.min([12, 23, -1, -1.1, 401])); // -1.1
  console.log(utils.min(['-1', 'string', '1', 1])); // error - invalid input
};

const sum = () => {
  const array1 = [1, 2, 3];

  console.log(utils.sum(array1)); // 6

  const array2 = [1, 'b', 3];
  console.log(utils.sum(array2)); // error - invalid input

  const array3 = [-1, -2, 3];
  console.log(utils.sum(array3)); // 0
};

const pow = () => {
  const result = utils.pow(2, 3);
  console.log(result);

  const result1 = utils.pow(3, -2);
  console.log(result1);
  // => 8
};

const average = () => {
  const avg = utils.average([1, -2, 3]); // 0.33
  console.log(avg);
};

const isPrime = () => {
  const number1 = 10;
  console.log(utils.isPrime(number1)); // false
  const number2 = 33;
  console.log(utils.isPrime(number2)); // false
  const number3 = 31;
  console.log(utils.isPrime(number3)); // true
  const number4 = 0;
  console.log(utils.isPrime(number4)); // false
  const number5 = 2;
  console.log(utils.isPrime(number5)); // true
};

const swapWholeAndRemainder = () => {
  console.log(utils.swapWholeAndRemainder(2.1)); // 1.2
  console.log(utils.swapWholeAndRemainder(1.2)); // 2.1
  console.log(utils.swapWholeAndRemainder(14231.544234)); // 544.14231
};

const math = () => {
  const array = [2, 3, 4, 5, 6, 7];

  const min = utils.min(array); // 2
  const sum = utils.sum(array); // 27
  const pow = utils.pow(min, sum); // 134217728

  const powArray = pow.toString().split('').map(Number);
  const average = utils.average(powArray).toFixed(2); // 3.89
  const swapped = utils.swapWholeAndRemainder(average); // 89.3
  const isPrime = utils.isPrime(Math.floor(swapped)); // true

  console.log(isPrime);
};

// Objects

const existInObject = () => {
  const result1 = utils.existInObject({ a: 5 }, 'a');
  const result2 = utils.existInObject({ a: 5 }, 'b');
  const result3 = utils.existInObject({ a: 5, b: 3 }, 'b');

  console.log(result1);
  // true

  console.log(result2);
  // => false

  console.log(result3);
  // true

  // console.log(utils.existInObject(['a', 'b', 'c'], 'b'););
  // throws an error - invalid type (first argument)

  // console.log(utils.existInObject({ a: 5, b: 3 }, ['b']););
  // throws an error - invalid type (second argument)
};

const removeProp = () => {
  const result = utils.removeProp({ a: 5, b: 6 }, 'a');
  const result2 = utils.removeProp({ a: 5 }, 'b');
  const result3 = utils.removeProp({ a: 5, b: 3 }, 'b');
  const result4 = utils.removeProp(['a', 'b', 'c'], 'b'); // throws an error - invalid type (first argument)
  const result5 = utils.removeProp({ a: 5, b: 3 }, ['b']); // throws an error - invalid type (second argument)

  console.log(result);
  // => { b: 6 }

  console.log(result2);
  // => { a: 5 }

  console.log(result3);
  // => { a: 5 }
};

const copy = () => {
  const obj1 = {
    a: 1,
    b: 2,
    c: 3,
  };

  obj1.d = 4;
  console.log(obj1);
  console.log(utils.copy(obj1));

  delete obj1.a;
  console.log(obj1);
  console.log(utils.copy(obj1));

  const obj2 = {};
  console.log(obj2);
  console.log(utils.copy(obj2));

  const obj3 = {
    a: {
      b: 1,
      c: {
        d: 4,
      },
    },
  };
  console.log(obj3);
  console.log(utils.copy(obj3));
};

const typeOfProps = () => {
  const obj = {
    a: 'Pesho',
    b: 20,
    c: true,
    d: {
      street: 'Al Malinov',
      number: 34,
    },
    e: false,
  };
  const result = utils.typeOfProps(obj);
  console.log(result);
};

const flat = () => {
  const result1 = utils.flat({
    a: 5,
    b: 6,
  });
  const result2 = utils.flat({
    a: 5,
    b: {
      c: 6,
      d: 7,
    },
  });

  console.log(result1);
  // => { a: 5, b: 6 }

  console.log(result2);
  // => { a: 5, 'b.c': 6, 'b.d': 7 }
};

const entries = () => {
  console.log(utils.entries({
    a: 5,
    b: 6,
    c: 7,
  })); // => [ [ 'a', 5 ], [ 'b', 6 ], [ 'c', 7 ] ]
  console.log(utils.entries({
    a: '8',
    8: 6,
    c: 7,
  })); // => [ ['8', 6], ['a', '8'], ['c', 7]]
  console.log(utils.entries({})); // => []
};

const objects = () => {
  const object = {
    name: 'Pesho',
    age: 20,
    isAlive: true,
    address: {
      street: 'Al Malinov',
      number: 34,
    },
  };

  const flatten = utils.flat(object); // { name: 'Pesho', age: 20, isAlive: true, address.street: 'Al Malinov', address.number: 34 }
  const removedPropCopy = utils.removeProp(flatten, 'address.number'); // { name: 'Pesho', age: 20, isAlive: true, address.street: 'Al Malinov' }
  const exactCopy = utils.copy(removedPropCopy); // { name: 'Pesho', age: 20, isAlive: true, address.street: 'Al Malinov' }
  const propTypes = utils.typeOfProps(exactCopy); // ['string', 'number', 'boolean', 'string']
  const entries = utils.entries(propTypes); // [[0, 'string'], [1, 'number], [2, 'boolean'], [3, 'string']]
  const existInObject = utils.existInObject(entries, '3'); // true

  console.log(existInObject);
};

// Strings

const slice = () => {
  const string1 = 'Telerik';
  const string2 = string1.slice(1, 3);
  console.log(string2);
  console.log(utils.slice(string1, 1, 3));
};

const repeat = () => {
  const pesho = utils.repeat('Pesho', 2); // 'PeshoPesho'
  const zvezdichka = utils.repeat('*', 10); // '**********'
  const numbers = utils.repeat('1 2 3', 3); // '1 2 31 2 31 2 3'
  const emptyString1 = utils.repeat('', 4); // ''
  const emptyString2 = utils.repeat(' ', 4); // '    '
  const dontRepeat = utils.repeat('Do not repeat that', 0); // ''

  console.log(pesho);
  console.log(zvezdichka);
  console.log(numbers);
  console.log(emptyString1);
  console.log(emptyString2);
  console.log(dontRepeat);
};

const capitalize = () => {
  const str1 = 'toDO!';

  console.log(utils.capitalize(str1)); // does not return special symbols at the end

  const str2 = 'toDO';

  console.log(utils.capitalize(str2)); // as expected

  const str3 = 'toD Oii';

  console.log(utils.capitalize(str3)); // as expected

  const str4 = ' toDOii';

  console.log(utils.capitalize(str4)); // doesn't check for space in the beginning

  const str5 = '!to!DO?';

  console.log(utils.capitalize(str5)); // does not return special symbols
};

const replace = () => {
  const replacement = utils.replace('Hi Fred', 'Fred', 'Barney');

  console.log(replacement);
  // => 'Hi Barneyred'

  const replacement2 = utils.replace('Hi Fred', 'Fred', 'Hi');

  console.log(replacement2);
  // => 'Hi Hi'

  const replacement3 = utils.replace('Hi Fred', 12, 'Barney'); // throws error - invalid input

  console.log(replacement3);
  // => 'Hi Barneyred'
};

const split = () => {
  const segments = utils.split('a-b-c', '-');

  console.log(segments);
  // => ['a', 'b', 'c']

  console.log(utils.split('a*b***c', '*')); // ["a", "b", "", "", "c"]
  console.log(utils.split('a-b c-d-e  d-a -narcos', ' ')); // ["a-b", "c-d-e", "", "d-a", "-narcos"]
  console.log(utils.split('a-b-c', ['-'])); // throws an error - invalid input
};

const trim = () => {
  console.log(utils.trim('  bear')); // bear
  console.log(utils.trim('  bear  ')); // bear
  console.log(utils.trim('bear  ')); // bear
};

const strings = () => {
  const string = utils.repeat('  home', 2); //   home  home
  const trimmed = utils.trim(string); // home  home
  const sliced = utils.slice(trimmed, 1, 8); // ome  ho
  const replaced = utils.replace(sliced, 'o', 'ri'); // rime  hri
  const capitalized = utils.capitalize(replaced); // Rime  hri
  const splitted = utils.split(capitalized, ' '); // ['Rime', '', 'hri']

  console.log(splitted);
};

// Expressions

const isMinLength = () => {
  const str = 'javascript';
  console.log(utils.isMinLength(str, 10)); // false

  console.log(utils.isMinLength(str, 5)); // true
};


const isMaxLength = () => {
  const str = 'tulipy';
  const emptyStr = '';
  console.log(utils.isMaxLength(str, 6)); // true
  console.log(utils.isMaxLength(str, 11)); // true
  console.log(utils.isMaxLength(str, 4)); // false
  console.log(utils.isMaxLength(emptyStr, 5)); // true
  console.log(utils.isMaxLength(emptyStr, 0)); // true
};

const isIn = () => {
  const result1 = utils.isIn(2, [1, 3, 5, 7]);
  console.log(result1);

  const result2 = utils.isIn(2, [1, 2, 3, 4]);
  console.log(result2);
};

const isArrayOfType = () => {
  const array1 = [1, 2, 3];
  console.log(utils.isArrayOfType(array1, 'string')); // false
  console.log(utils.isArrayOfType(array1, 'number')); // true

  const array2 = [1, '2', 3];
  console.log(utils.isArrayOfType(array2, 'string')); // false
  console.log(utils.isArrayOfType(array2, 'number')); // false

  const array3 = 'array';
  console.log(utils.isArrayOfType(array3, 'string')); // type error as expected
};

const areValidNumbers = () => {
  const result1 = utils.areValidNumbers(['1', '2', '3', '4']);
  const result2 = utils.areValidNumbers(['1', '2', 'apple', '4']);

  console.log(result1);
  // => true

  console.log(result2);
  // => false
};

const sumNumbersFromString = () => {
  const result = utils.sumNumbersFromString('2 4 5 4 10');

  console.log(result); // 25
  console.log(utils.sumNumbersFromString('2 4 5 10 10')); // 31
};

const expressions = () => {
  const string = '1 0 1 1 0 2';

  const isMinLen = utils.isMinLength(string, 3); // true
  const isMaxLen = utils.isMaxLength(string, 11); // true
  const sum = utils.sumNumbersFromString(string); // 5

  const splitted = string.split(' ');
  const areValidNumbers = utils.areValidNumbers(splitted); // true
  const isArrayOfType = utils.isArrayOfType(splitted, 'string'); // true
  const isIn = utils.isIn('2', splitted); // true

  const validations = [
    isMinLen,
    isMaxLen,
    areValidNumbers,
    isArrayOfType,
    isIn,
  ];

  const areAllCorrect =
    validations.every((validation) => validation === true) &&
    validations.length === sum;

  console.log(areAllCorrect);
};

// Arrays

// reverse();
// fill();
// join();
// indexOf();
// filter();
// zip();
// arrays();

// Math

// min();
// sum();
// average();
// pow();
// isPrime()
// swapWholeAndRemainder();
// math();

// Objects

// existInObject();
// removeProp();
// copy();
// typeOfProps();
// flat();
// entries();
// objects();

// Strings

// slice();
// repeat();
// capitalize();
// replace();
// split();
// trim();
// strings();

// Expressions

// isMinLength();
// isMaxLength();
// isIn();
// isArrayOfType();
// areValidNumbers();
// sumNumbersFromString();
// expressions();
