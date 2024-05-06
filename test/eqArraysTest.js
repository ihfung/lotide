const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test Cases to see if arrays are equal
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
