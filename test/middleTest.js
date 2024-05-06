const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


//Test Cases to see if arrays are equal
middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle([1, 2, 3, 4, 5, 6, 7, 8, 9]); // => [5]
middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // => [5, 6]
middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]); // => [6]

assertArraysEqual(middle([1]), []); // => should PASS
assertArraysEqual(middle([1, 2]), []); // => should PASS
assertArraysEqual(middle([1, 2, 3]), [2]); // => should PASS
assertArraysEqual(middle([2, 3, 5, 6, 4]), [3]); // => should FAIL
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 10, 6, 7, 8, 9]), [5]); // => should FAIL
