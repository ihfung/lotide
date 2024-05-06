const head = require("../head");
const assert = require('chai').assert;

// TEST CODE
//Test Cases to see if arrays are equal
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("returns 39 for [39, 6, 7]", () => {
    assert.strictEqual(head([39, 6, 7]), 39);
  });

  it("returns 'New' for ['New', 'Used', 'Well-worn']", () => {
    assert.strictEqual(head(['New', 'Used', 'Well-worn']), 'New');
  });

  it("returns 'Jeans' for ['Jeans', 'Cargo', 'Sweats']", () => {
    assert.strictEqual(head(['Jeans', 'Cargo', 'Sweats']), 'Jeans');
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
});