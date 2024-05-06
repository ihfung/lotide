const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let result = true;
  if (arr1.length !== arr2.length) { // check if the length of the arrays is the same
    result = false;
  }
  for (let i = 0; i < arr1.length; i++) { // loop through the arrays
    if (arr1[i] !== arr2[i]) { // check if the elements of the arrays are the same
      result = false;
    }
  }
  return result;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
