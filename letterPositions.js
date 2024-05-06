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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) { // loop through the sentence
    if (sentence[i] !== " ") { // check if the letter is not a space
      if (results[sentence[i]]) { // check if the letter is already in the object
        results[sentence[i]].push(i); // add the index to the array
      } else {
        results[sentence[i]] = [i];  // add the letter to the object
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("letter").t, [2, 3]);
assertArraysEqual(letterPositions("jason").s, [2]);
assertArraysEqual(letterPositions("vanessa").s, [4, 5]);
