const assertEqual = require("./assertEqual");

const head = function(array) {
  if (array.length !== 0) {  // check if the array is not empty
    return array[0];  // return the first element
  } else {
    return undefined; //  return undefined if the array is empty
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);

assertEqual(head([39, 6, 7]), 31);
assertEqual(head(["New", "Used", "Well-worn"]), "Jeans");
assertEqual(head([]), 13);

