const assertEqual = require("../assertEqual");
const head = require("../head");
// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);

assertEqual(head([39, 6, 7]), 31);
assertEqual(head(["New", "Used", "Well-worn"]), "Jeans");
assertEqual(head([]), 13);

