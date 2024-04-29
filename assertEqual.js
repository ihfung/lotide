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
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  } else {
    console.log("✅✅✅ Assertion passed: " + actual + " === " + expected);
  }
};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
assertEqual("james", "james");
assertEqual("sam", "steph");
assertEqual(13, 13);
assertEqual(31, 39);
