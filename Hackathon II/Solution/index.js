import {
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
} from './02.array-utils.js';

import {
  add5AtFront,
  add7AtFront,
  add8AtBack,
  add9AtBack,
  sliceFrom4To7,
  concatWith2And3,
  joinWithDash,
  joinWithAnd,
  fillWith1From3To6,
  fillWithTrueFrom0To7,
  isThereA3,
  indexOf5,
  find10,
  findFirstGreaterThan8,
  flippedLog,
  logElements,
  raiseToPower2,
  getNames,
  filterLessThan4,
  filterPeshos,
  sum,
  multiply,
  isThereAPersonAbove18,
  areAllPeopleUnder35,
  indexOfPesho,
  getAllGrades,
  countFirst5Elements,
  markFirst4OddAndEvenElements,
  groupByName,
  groupByIdentity,
} from './03.partially-applied.js';

const ivanTest = () => {
  const numArrayExample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const strArrayExample = ['a', 'b', 'c', 'd'];

  const resultFromSlice = slice(1, 5)(numArrayExample);
  console.log(resultFromSlice);// [2, 3, 4, 5, 6]

  const resultFromForEach = forEach((x) => x**2)(numArrayExample);
  console.log(resultFromForEach);// [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

  const resultFromIncludes = includes(10)(numArrayExample);
  console.log(resultFromIncludes);// true

  const resultFromFlatMap = flatMap((x) => x + 2)(strArrayExample);
  console.log(resultFromFlatMap);// [ 'a2', 'b2', 'c2', 'd2' ]
};

/**
 * @author Dayana Kirilova
 */
const addFirstTest = () => {
  // add5AtFront
  const arr = [1, 2, 3];
  const copy = addFirst(5)(arr);
  console.log(arr); // 1, 2, 3
  console.log(copy); // 5, 1, 2, 3

  const arr1 = [1, 5, 6];
  const arrWith5 = add5AtFront(arr1); // [5, 1, 5, 6]
  console.log(arr1); // [1, 5, 6]
  console.log(arrWith5); // [5, 1, 5, 6]

  // add7AtFront
  const arr2 = [];
  const arrWith7 = add7AtFront(arr2);
  console.log(arr2); // []
  console.log(arrWith7); // [7]
};

// addFirstTest()

/**
 * @author Tsvetelina Kyoseva
 */
const addLastTest = () => {
  const arr1 = [1, 2, 3];

  const copy1 = add8AtBack(arr1);
  const copy2 = add9AtBack(arr1);

  console.log(copy1); //  1, 2, 3, 8
  console.log(copy2); //  1, 2, 3, 9

  console.log(arr1); // 1, 2, 3

  const arr2 = [];

  const copy21 = add8AtBack(arr2);

  console.log(copy21); //   8

  console.log(arr1); // 1, 2, 3
  console.log(arr2); // []
};

// console.log(addLastTest);


/**
 * @author Tsvetelina Kyoseva
 */
const removeLastTest = () => {
  const arr1 = [1, 2, 3];

  const copy1 = removeLast(arr1);

  console.log(copy1); //  1, 2

  console.log(arr1); // 1, 2, 3

  const arr2 = [];

  const copy21 = removeLast(arr2);

  console.log(copy21); // []

  console.log(arr2); // []

  const arr3 = [1];

  const copy31 = removeLast(arr3);

  console.log(copy31); // []

  console.log(arr3); // []
};


/**
 * @author Tsvetelina Kyoseva
 */
const findTest = () => {
  const arr1 = [1, 2, 3, 10];

  const copy1 = find10(arr1);

  console.log(copy1);
  console.log(arr1);

  const arr2 = [];

  const copy21 = find10(arr2);

  console.log(copy21);

  console.log(arr2);

  const arr3 = [1, 2];

  const copy31 = find10(arr3);

  console.log(copy31);

  console.log(arr3);
};
console.log(findTest);


/**
 * @author Mihail Enev
 */
const entriesTest = () => {
  const arr = [1, 2, 3];
  const arr1 = ['1', '2', '3'];
  const arr2 = [undefined, '1', 1];
  const resultTest = entries(arr);
  const resultTest1 = entries(arr1);
  const resultTest2 = entries(arr2);
};
// console.log(entriesTest);

/**
   * @author Mihail Enev
   */
const everyTest = () => {
  const arr1 = [100, 100, 100, 100, 100, 100];
  const arr2 = [100, 100, 100, 99, 100, 100];

  const innerFunc = (param) => {
    let check = false;
    if (param === 100) {
      check = true;
    }
    return check;
  };

  const everyCheck = every(func);

  console.log(everyCheck(arr1)); // true
  console.log(everyCheck(arr2)); // false
};
  // console.log(everyTest);

/**
   * @author Mihail Enev
   */
const flipTest = () => {
  const substractFunc = (...params) => params.join(' ');
  const flippingFunc = flip(substractFunc);

  console.log(substractFunc('Mihail', 'Tsvetanov', 'Enev')); // Mihail Tsvetanov Enev
  console.log(flippingFunc('Mihail', 'Tsvetanov', 'Enev')); // Enev Tsvetanov Mihail
};
  // console.log(flipTest);

/**
   * @author Mihail Enev
   */
const flatTest = () => {
  const arr1 = [1, 2, 3, [4, 5]];
  const arr2 = [1, 2, 3, [[4, 5]]];
  const arr3 = [1, 2, 3, [[[4, 5]]]];
  const arr4 = [1, 2, 3, [[[4, 5]]]];

  const testFlat1 = arr1.flat(1); // [ 1, 2, 3, 4, 5 ]
  const testFlat2 = arr2.flat(2); // [ 1, 2, 3, 4, 5 ]
  const testFlat3 = arr3.flat(3); // [ 1, 2, 3, 4, 5 ]
  const testFlat4 = arr4.flat(2); // [ 1, 2, 3, [4, 5]]

  console.log(testFlat1);
  console.log(testFlat2);
  console.log(testFlat3);
  console.log(testFlat4);
};
  // console.log(flatTest);

// const testOne = () => {
//   const numbers = [2, 7, 5, 9, 3];
/**
 * @author Dayana Kirilova
 */
const flippedLogTest = () => {
  flippedLog(1, 2, 3, 4, 5); // to log: 5, 4, 3, 2, 1
  flippedLog([], 'Pesho', 33); // to log: 33, 'Pesho', []
};

// flippedLogTest
/**
 * @author Dayana Kirilova
 */
const isThereAPersonAbove18Test = () => {
  const people = [
    { name: 'Pesho', age: 33 },
    { name: 'Ivan', age: 15 },
    { name: 'Dayana', age: 16 },
  ];

  console.log(isThereAPersonAbove18(people)); // true
  const [pesho, ...underAgedPoeple] = people;
  console.log(isThereAPersonAbove18(underAgedPoeple)); // false
};

// isThereAPersonAbove18Test()
/**
 * @author Dayana Kirilova
 */
const areAllPeopleUnder35Test = () => {
  const people = [
    { name: 'Pesho', age: 33 },
    { name: 'Ivan', age: 15 },
    { name: 'Dayana', age: 16 },
  ];

  console.log(areAllPeopleUnder35(people)); // true
  people.push({ name: 'Tanya', age: 44 });
  console.log(areAllPeopleUnder35(people)); // false
};

// areAllPeopleUnder35Test()
/**
 * @author Dayana Kirilova
 */
const sumTest = () => {
  const numbers = [1, 2, 3, 4, 5];
  const emptyNumbers = [];

  console.log(sum(numbers)); // 15
  console.log(sum(emptyNumbers)); // 0
};

// sumTest()

/**
 * @author Dayana Kirilova
 */
const multiplyTest = () => {
  const numbers = [1, 2, 3, 4, 5];
  const emptyNumbers = [];

  console.log(multiply(numbers)); // 120
  console.log(multiply(emptyNumbers)); // 1 ??
};

// multiplyTest()

const testOne = () => {
  const numbers = [2, 7, 5, 9, 3];

  const a = isThereA3(numbers); // true
  const b = indexOf5(numbers); // 2
  const c = find10(numbers); // null

  const people = [
    { name: 'Ivan', age: 15 },
    { name: 'Pesho', age: 36 },
  ];

  const d = isThereAPersonAbove18(people); // true
  const e = areAllPeopleUnder35(people); // false
  const f = indexOfPesho(people); // 1

  logElements(people); // { name: 'Ivan', age: 15 }, { name: 'Pesho', age: 32 } (2 lines)
  flippedLog(...numbers); // 3, 9, 5, 7, 2 (1 line)

  console.log(a, b, c, d, e, f);
};

// testOne();

const testTwo = () => {
  const startValue = { length: 6 };
  const piped = pipe(
      arrayFrom, // [undefined, undefined, undefined, undefined, undefined, undefined]
      fillWith1From3To6, // [undefined, undefined, undefined, 1, 1, 1]
      add8AtBack, // [undefined, undefined, undefined, 1, 1, 1, 8]
      concatWith2And3, // [undefined, undefined, undefined, 1, 1, 1, 8, 2, 3]
      sliceFrom4To7, // [1, 1, 8]
      removeFirst, // [1, 8]
      add5AtFront, // [5, 1, 8]
      reverse, // [8, 1, 5]
      raiseToPower2, // [64, 1, 25]
      sum // 90
  );

  console.log(piped(startValue));
};

// testTwo();

const testThree = () => {
  const startValue = [
    { name: 'Ivan', age: 15 },
    { name: 'Pesho', age: 32 },
    { name: 'Pesho', age: 23 },
    { name: 'Maria', age: 19 },
  ];
  // its compose so it will run backwards
  const composed = compose(
      findFirstGreaterThan8, // 47
      add9AtBack, // [ 47, 9 ]
      (str) => [str.length], // [ 47 ]
      joinWithAnd, // 1&false&odd&2&true&even&3&false&odd&4&true&even
      flat, // [1, false, 'odd', 2, true, 'even', 3, false, 'odd', 4, true, 'even']
      markFirst4OddAndEvenElements, // [[1, false, 'odd'], [2, true, 'even'], [3, false, 'odd'], [4, true, 'even']]
      (arr) => arr.map((_, index) => index + 1),
      fillWithTrueFrom0To7, // [true, true, true, true]
      add8AtBack, // [[0, 'Ivan'], [1, 'Pesho'], [2, 'Pesho'], 8]
      entries, // [[0, 'Ivan'], [1, 'Pesho'], [2, 'Pesho']]
      removeLast, // ['Ivan', 'Pesho', 'Pesho']
      getNames, // ['Ivan', 'Pesho', 'Pesho', 'Maria']
      flat, // [{ name: 'Ivan', age: 15 }, { name: 'Pesho', age: 32 }, { name: 'Pesho', age: 23 }, { name: 'Maria', age: 19 }]
      Object.values, // [[{ name: 'Ivan', age: 15 }], [{ name: 'Pesho', age: 32 }, { name: 'Pesho', age: 23 }], [{ name: 'Maria', age: 19 }]]
      groupByName // { Ivan: [{ name: 'Ivan', age: 15 }], Pesho: [{ name: 'Pesho', age: 32 }, { name: 'Pesho', age: 23 }], Maria: [{ name: 'Maria', age: 19 }]}
  );

  console.log(composed(startValue));
};

// testThree();

const testFour = () => {
  const startValue = [
    { name: 'Ivan', grades: [2, 4, 5] },
    { name: 'Pesho', grades: [3, 2, 6] },
    { name: 'Pesho', grades: [2, 5, 2] },
  ];
  const piped = pipe(
      filterPeshos, // [{ name: 'Pesho', grades: [3, 2, 6] }, { name: 'Pesho', grades: [2, 5, 2] }];
      getAllGrades, // [3, 2, 6, 2, 5, 2]
      filterLessThan4, // [3, 2, 2, 2]
      groupByIdentity, // { 2: [2, 2, 2], 3: [3] }
      Object.values, // [[2, 2, 2], [3]],
      flat, // [2, 2, 2, 3]
      add7AtFront, // [7, 2, 2, 2, 3]
      joinWithDash, // 7-2-2-2-3
      (str) => str.split(''), // ['7', '-', '2', '-', '2', '-', '2', '-', '3']
      countFirst5Elements, // [[1, '7'], [2, '-'], [3, '2'], [4, '-'], [5, '2']]
      keys, // [0, 1, 2, 3, 4]
      removeFirst, // [1, 2, 3, 4]
      multiply // 24
  );

  console.log(piped(startValue));
};

/**
 * @author Zhulien Zhivkov
 *
 * Testing functions key, fill, some, compose, groupBy
 */
const testingFuncForJJ = () => {
  const arrOfOBjects = [
    { vehicle: 'car', brand: 'Ford', hasOwnCar: false, name: 'Ivan' },
    { vehicle: 'bike', brand: 'Yamaha', hasOwnCar: false, name: 'Petar' },
    { vehicle: 'bike', brand: 'Kawazaki', hasOwnCar: false, name: 'Manga' },
    { vehicle: 'guitar', brand: 'Yamaha', hasOwnCar: true, name: 'Bobo' },
    { vehicle: 'airplane', brand: 'AF1', hasOwnCar: true, name: 'Ivan' },
    { vehicle: 'car', brand: 'BMW', hasOwnCar: true, name: 'Bobi' },
    {
      vehicle: 'guitar',
      brand: 'Italian Tear',
      hasOwnCar: false,
      name: 'Petar',
    },
  ];

  // * groupBy
  const groupFuncByName = (el = {}) => el.name;
  const groupFuncByOwnCar = (el = {}) => el.hasOwnCar;

  const decoratedGroupByNames = groupBy(groupFuncByName);
  const decoratedGroupByCarOwners = groupBy(groupFuncByOwnCar);

  // console.log(decoratedGroupByNames(arrOfOBjects));
  // console.log(decoratedGroupByCarOwners(arrOfOBjects));

  // * keys
  console.log(keys([1, 2, 3])); // [ 0, 1, 2 ]
  console.log(keys([1, '', 3])); // [ 0, 2 ]
  console.log(keys([{}, undefined, '', 1, null, 'string', 3]));
  // [ 0, 3, 5, 6 ]

  // * fill
  console.log(fill(1, 5, 8)([0, 0, 0, 0, 0, 0, 0, 0]));
  // [0, 0, 0, 0, 0, 1, 1, 1]
  console.log(fill('*', 2, 4)([0, 0, 0, 0, 0, 0, 0, 0]));
  // [0, 0, "*", "*", 0, 0, 0, 0]
  console.log(fill('0', 0, -3)([0, 0, 0, 0, 0, 0, 0, 0]));
  // ["0", "0", "0", "0", "0", 0, 0, 0]

  // * some

  const predicator1 = (el) => el === '1';
  const predicator2 = (el) => el.name === 'Juliandro';
  const predicator3 = (el) => el.address.city === 'NY';
  const predicator4 = (el) => el.brand === 'Yamaha' && el.vehicle === 'guitar';

  const decorator1 = some(predicator1);
  const decorator2 = some(predicator2);
  const decorator3 = some(predicator3);
  const decorator4 = some(predicator4);

  console.log(decorator1([1, 2, 3, '11', 4, 2, 1]));
  console.log(decorator2(arrOfOBjects));
  console.log(decorator3(arrOfOBjects));
  console.log(decorator4(arrOfOBjects));

  // * compose

  const getName = (obj = {}) => obj.name;
  const transformToLowerCase = (string = '') => string.toLowerCase();
  const capitalizeFirstCapital = (string = '') =>
    `${string[0].toUpperCase()}${string.slice(1)}`;
  const reverseString = (string = '') => string.split('').reverse().join('');

  const decoratedCompose = compose(
      reverseString,
      capitalizeFirstCapital,
      transformToLowerCase,
      getName
  );

  console.log(decoratedCompose(arrOfOBjects[0])); // navI
};
