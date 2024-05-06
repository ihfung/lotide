const eqArrays = function(arr1, arr2) {
  let result = true;
  if (arr1.length !== arr2.length) { // check if the length of the arrays is the same
    result = false; // if not, return false
  }
  for (let i = 0; i < arr1.length; i++) { // loop through the arrays
    if (arr1[i] !== arr2[i]) { // check if the elements of the arrays are the same
      result = false; // if not, return false
    }
  }
  return result;
};

const assertArraysEqual = function(actual, expected) {
  let equal = eqArrays(actual, expected);
  if (equal === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) { // loop through the array
    results.push(callback(item)); // call the callback function and push the result to the results array
  }
  return results;
};

const words = ["great", "cool", "to", "major", "tom"];

const results1 = map(words, (word) => word[0]);
console.log(results1);

const results2 = map(words, (word) => word.length);

const results3 = map(words, (word) => word + "s");

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [5, 4, 2, 5, 3]);
assertArraysEqual(results3, ["greats", "cools", "tos", "majors", "toms"]);
