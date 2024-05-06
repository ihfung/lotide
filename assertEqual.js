/*// FUNCTION IMPLEMENTATION #1
const sum = function (a, b) {
  return a + b;
};

// TEST CODE
console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see it fail!

// FUNCTION IMPLEMENTATION #2
const sumBuggy = function (a, b) {
  return a * b;
};

// TEST CODE
console.assert(sumBuggy(1, 2) === 3); // fails, because bug!
*/

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) { // function that takes in two parameters
  if (actual !== expected) { // check if the actual value is equal to the expected value
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  }
};



module.exports = assertEqual;