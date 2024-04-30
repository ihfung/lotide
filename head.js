const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  }
};

const head = function(array) {
  if (array.length !== 0) {
    return array[0];
  } else {
    return undefined;
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);

assertEqual(head([39, 6, 7]), 31);
assertEqual(head(["New", "Used", "Well-worn"]), "Jeans");
assertEqual(head([]), 13);
