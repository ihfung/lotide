const assert = require('chai').assert;
const tail = require("../tail");

// TEST CODE
//Test Cases to see if arrays are equal
describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {  //changed from assert.strictEqual to assert.deepEqual
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']); //compare arrays to see if they are equal
  });

  it("returns [] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']); //compare arrays to see if they are equal
  });

  it("returns [] for ['Japan']", () => {
    assert.deepEqual(tail(['Japan']), []); //compare arrays to see if they are equal
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []); //compare arrays to see if they are equal
  });
});