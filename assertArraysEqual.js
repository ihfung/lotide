const eqArrays = function(arr1, arr2) {
  let result = true;
  if (arr1.length !== arr2.length) {  // check if the length of the arrays is the same
    result = false;  // if not, return false
  }
  for (let i = 0; i < arr1.length; i++) { // loop through the arrays
    if (arr1[i] !== arr2[i]) { // check if the elements of the arrays are the same
      result = false; // if not, return false
    }
  }
  return result;
};

const assertArraysEqual = function(actual, expected) {
  let equal = eqArrays(actual, expected); // call eqArrays function
  if (equal === false) { // check if the return value is false
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
