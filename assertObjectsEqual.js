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

const eqObjects = function(object1, object2) {
  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);
  let result = true;
  if (obj1.length !== obj2.length) {
    result = false;
  }
  for (let i of obj1) {
    if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
      if (!eqArrays(object1[i], object2[i])) {
        result = false;
      }
    } else if (object1[i] !== object2[i]) {
      result = false;
    }
  }
  return result;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require("util").inspect; // <= add this line
  if (!eqObjects(actual, expected)) {
    console.log(
      `🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  } else {
    console.log(
      `✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  }
};

const object1 = { a: "1", b: "2" };
const object2 = { b: "2", a: "1" };
assertObjectsEqual(object1, object2);

const objectWtihThree = { a: "1", b: "2", c: "3" };
assertObjectsEqual(object1, objectWtihThree);

const objectWithArrayOne = { c: "13", d: ["23", 31] };
const objectWithArrayTwo = { d: ["23", 31], c: "13" };
assertObjectsEqual(objectWithArrayOne, objectWithArrayTwo);

const objectArrayThree = { c: "25", d: ["23", 31, 56] };
assertObjectsEqual(objectWithArrayOne, objectArrayThree);
