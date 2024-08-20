const assertArraysEqual = function(actual, expected) {
  let equal = eqArrays(actual, expected); // call eqArrays function
  if (equal === false) { // check if the return value is false
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { // check if the length of the arrays is the same
    return false;
  }
  for (let i = 0; i < arr1.length; i++) { // loop through the arrays
    if (arr1[i] !== arr2[i]) { // check if the elements of the arrays are the same
      return false;
    }
  }
  return true;
};

const flatten = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(arr[i]); // use concat to flatten the array. concat is used to merge two or more arrays
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// Unique Test Cases
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => ✅ Assertion Passed
assertArraysEqual(flatten([1, [2, 3], [4, 5], 6]), [1, 2, 3, 4, 5, 6]); // => ✅ Assertion Passed
assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]); // => ✅ Assertion Passed

// Fail Cases
assertArraysEqual(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5, 6]); // => 🛑 Assertion Failed
assertArraysEqual(flatten([1, [2, 3], 4, 5]), [1, 2, 3, 4, 6]); // => 🛑 Assertion Failed
assertArraysEqual(flatten([1, [2], [3, 4], 5]), [1, 2, 3, 4]); // => 🛑 Assertion Failed

//what is newArr.concat(arr[i]) doing?
// newArr.concat(arr[i]) is merging the elements of the array with the elements of the sub-array.
//so if we have [1, 2, [3, 4], 5, [6]] as the input, newArr.concat(arr[i]) will merge the elements of the sub-array with the elements of the array and will look like this [1, 2, 3, 4, 5, 6].