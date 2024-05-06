const asset  = require('chai').assert;
const middle = require('../middle');


// TEST CODE
//Test Cases to see if arrays are equal
describe("#middle", () => {
  it("returns [] for [1]", () => {
    asset.deepEqual(middle([1]), []); //compare arrays to see if they are equal
  });

  it("returns [] for [1, 2]", () => {
    asset.deepEqual(middle([1, 2]), []); //compare arrays to see if they are equal
  });

  it("returns [2] for [1, 2, 3]", () => {
    asset.deepEqual(middle([1, 2, 3]), [2]); //compare arrays to see if they are equal
  });

  it("returns [3] for [2, 3, 5, 6, 4]", () => {
    asset.deepEqual(middle([2, 5, 3, 6, 4]), [3]); //compare arrays to see if they are equal
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    asset.deepEqual(middle([1, 2, 3, 4]), [2, 3]); //compare arrays to see if they are equal
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    asset.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //compare arrays to see if they are equal
  });

  it("returns [5] for [1, 2, 3, 4, 10, 6, 7, 8, 9]", () => {
    asset.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]); //compare arrays to see if they are equal
  });
});