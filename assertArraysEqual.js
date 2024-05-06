const eqArrays = require('./eqArrays'); // import eqArrays function

const assertArraysEqual = function(actual, expected) {
  let equal = eqArrays(actual, expected); // call eqArrays function
  if (equal === false) { // check if the return value is false
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  }
};

module.exports = assertArraysEqual; // export the function to be used in other files