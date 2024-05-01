const eqArrays = function(arr1, arr2) {
  let result = true;
  if (arr1.length !== arr2.length) {
    result = false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
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

const middle = function(array) {
  let middArr = [];
  if (array.length <= 2) {
    middArr = [];
  } else if (array.length % 2 === 1) {
    middArr.push(array[(array.length - 1) / 2]);
  } else if (array.length % 2 === 0) {
    middArr.push(array[array.length / 2 - 1]);
    middArr.push(array[array.length / 2]);
  }
  return middArr;
};

middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle([1, 2, 3, 4, 5, 6, 7, 8, 9]); // => [5]
middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // => [5, 6]
middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]); // => [6]

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([2, 3, 5, 6, 4]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 10, 6, 7, 8, 9]), [5]);
