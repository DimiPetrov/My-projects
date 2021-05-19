const identity = (x) => x;

const lessThan = (value) => {
  return (x) => x < value;
};

const greaterThan = (value) => {
  return (x) => x > value;
};

const equalTo = (value) => {
  return (x) => x === value;
};

const project = (prop) => {
  return (x) => x[prop];
};

const propLessThan = (prop, value) => {
  return (x) => x[prop] < value;
};

const propGreaterThan = (prop, value) => {
  return (x) => x[prop] > value;
};

const propEqualTo = (prop, value) => {
  return (x) => x[prop] === value;
};

const power = (y) => {
  return (x) => x ** y;
};

const log = (...args) => console.log(...args);

const sumReducer = (acc, el) => acc + el;

const multiplyReducer = (acc, el) => acc * el;

export {
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
};
