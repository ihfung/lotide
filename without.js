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

const without = function(sourceArray, itemsToRemove) {
  let newArray = []; // create an empty array
  for (let i = 0; i < sourceArray.length; i++) { // loop through the source array
    for (let j = 0; j < itemsToRemove.length; j++) { // loop through the items to remove
      if (sourceArray[i] === itemsToRemove[j]) { // check if the elements are the same
        sourceArray.splice(i, 1); // remove the element from the source array
        newArray = sourceArray; // assign the source array to the new array
      }
    }
  }
  return newArray;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
