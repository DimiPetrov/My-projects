import {
  identity,
  lessThan,
  greaterThan,
  equalTo,
  project,
  propEqualTo,
  propLessThan,
  propGreaterThan,
  power,
  log,
  sumReducer,
  multiplyReducer,
} from './01.helpers.js';

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

// easy
/**
 * @author Dayana Kirilova
 */
const add5AtFront = addFirst(5);
/**
 * @author Mark Yosifov
 */
const add7AtFront = addFirst(7);

/**
 * @author Tsvetelina Kyoseva
 */
const add8AtBack = addLast(8);
const add9AtBack = addLast(9);

/**
 * @author Zhulien Zhivkov
 */
const sliceFrom4To7 = slice(4, 7);

/**
 * @author Mihail Enev
 */
const concatWith2And3 = concat(['concated']);

/**
 * @author Tsvetelina Kyoseva
 */
const joinWithDash = join('-');
const joinWithAnd = join('&');

/**
 * @author Mark Yosifov
 */
const fillWith1From3To6 = fill(1, 3, 6);

/**
 * @author Ivan Cerovski
 */
const fillWithTrueFrom0To7 = fill(true, 0, 7);

/**
 * @author Dayana Kirilova
 */
const isThereA3 = some(equalTo(3));

/**
 * @author Zhulien Zhivkov
 */
const indexOf5 = indexOf(5);

// medium
/**
 * @author Mihail Enev
 */
const find10 = find(equalTo(10));
/**
 * @author Dimitar Petrov
 */
const findFirstGreaterThan8 = find(greaterThan(8));

/**
 * @author Dayana Kirilova
 */
const flippedLog = flip(log);

/**
 * @author Mark Yosifov
 */
const logElements = map(log);

/**
 * @author Ivan Cerovski
 */
const raiseToPower2 = forEach((x) => x**2);
const getNames = forEach(identity.name);

/**
 * @author Zhulien Zhivkov
 */
const filterLessThan4 = filter((currValue) => currValue < 4);

/**
 * @author Mihail Enev
 */
const filterPeshos = filter(equalTo('Pesho'));
/**
 * @author Dimitar Petrov
 */
const sum = reduce(sumReducer, 0); // fixed to pass the tests - Dayana
/**
 * @author Dimitar Petrov
 */
const multiply = reduce(multiplyReducer, 1); // Fixed to pass the tests - Dayana

/**
 * @author Dayana Kirilova
 */
const isThereAPersonAbove18 = some(propGreaterThan('age', 18));
/**
 * @author Dayana Kirilova
 */
const areAllPeopleUnder35 = every(propLessThan('age', 35));

const indexOfPesho = indexOf('Pesho');

/**
 * @author Zhulien Zhivkov
 */
const getAllGrades = filter((currValue) =>
  currValue['grades'] ? true : false
);

/**
 * @author Mihail Enev
 */
const countFirst5Elements = zip(
  [1, 2, 3, 4, 5],
  ['1El', '2El', '3El', '4El', '5El']
);

const markFirst4OddAndEvenElements; // TODO

const groupByName;
/**
 * @author Dimitar Petrov
 */
const groupByIdentity = groupBy(identity);

export {
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
};
