const eqArrays = function(arr1, arr2) {
  let result = true;
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result;
};

// const assertEqual = function(actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   } else {
//     console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
//   }
// };

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// const eqObjects = function(object1, object2) {
//   const obj1 = Object.keys(object1); // get the keys of the first object
//   const obj2 = Object.keys(object2);// get the keys of the second object
//   let result = true;
//   if (obj1.length !== obj2.length) { // check if the length of the keys are the same
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
        return false;
      }
    } else if (typeof object1[i] === 'object' && typeof object2[i] === 'object') {
      if (!eqObjects(object1[i], object2[i])) {
        result = false;
      }
    } else if (object1[i] !== object2[i]) {
      result = false;
    }
  }
  
  return result;
};


// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// eqObjects(shirtObject, anotherShirtObject); // => true
// //We need to use that return value in combination with assertEquals to test if the function is working correctly.
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// const longSleeveShirtObject = {
//   size: "medium",
//   color: "red",
//   sleeveLength: "long",
// };
// eqObjects(shirtObject, longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
// };
// eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
// assertEqual(
//   eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
//   true
// );

// const longSleeveMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
//   sleeveLength: "long",
// };
// eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
// assertEqual(
//   eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
//   false
// );

module.exports = eqObjects; // export the function to be used in other files