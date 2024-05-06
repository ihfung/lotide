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
  let middArr = []; // create an empty array
  if (array.length <= 2) { // check if the array has 2 or less elements
    middArr = []; // return an empty array
  } else if (array.length % 2 === 1) { // check if the array has an odd number of elements
    middArr.push(array[(array.length - 1) / 2]); // push the middle element to the array
  } else if (array.length % 2 === 0) { // check if the array has an even number of elements
    middArr.push(array[array.length / 2 - 1]); // push the first middle element to the array
    middArr.push(array[array.length / 2]); // push the second middle element to the array
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
