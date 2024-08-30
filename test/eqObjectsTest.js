const assertObjectsEqual = require('../assertObjectsEqual');


// Test cases
assertObjectsEqual({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true

assertObjectsEqual({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false
assertObjectsEqual({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => false