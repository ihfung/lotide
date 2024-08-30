const eqObjects = require('./eqObjects'); // import eqObjects function
// const eqArrays = function(arr1, arr2) {
//   let result = true;
//   if (arr1.length !== arr2.length) {
//     result = false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       result = false;
//     }
//   }
//   return result;
// };

// const eqObjects = function(object1, object2) { // compare two objects
//   const obj1 = Object.keys(object1);  // get the keys of the first object
//   const obj2 = Object.keys(object2); // get the keys of the second object
//   let result = true;
//   if (obj1.length !== obj2.length) {  // check if the length of the keys are the same
//     result = false;
//   }
//   for (let i of obj1) { // loop through the keys
//     if (Array.isArray(object1[i]) && Array.isArray(object2[i])) { // check if the value is an array
//       if (!eqArrays(object1[i], object2[i])) { // call eqArrays function
//         result = false;
//       }
//     } else if (object1[i] !== object2[i]) { // check if the values are the same
//       result = false;
//     }
//   }
//   return result;
// };

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) { // function that takes in two parameters
  // Implement me!
  const inspect = require("util").inspect; // <= add this line to use the inspect function
  if (!eqObjects(actual, expected)) { // call eqObjects function
    console.log(
      `🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  } else {
    console.log(
      `✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  }
};

// const object1 = { a: "1", b: "2" };
// const object2 = { b: "2", a: "1" };
// assertObjectsEqual(object1, object2);

// const objectWtihThree = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(object1, objectWtihThree);

// const objectWithArrayOne = { c: "13", d: ["23", 31] };
// const objectWithArrayTwo = { d: ["23", 31], c: "13" };
// assertObjectsEqual(objectWithArrayOne, objectWithArrayTwo);

// const objectArrayThree = { c: "25", d: ["23", 31, 56] };
// assertObjectsEqual(objectWithArrayOne, objectArrayThree);


module.exports = assertObjectsEqual; // export the function to be used in other files