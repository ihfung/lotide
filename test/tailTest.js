const assertEqual = require("../assertEqual");
const tail = require("../tail");

const result = tail(["Hello", "Lighthouse", "Labs"]); // test with 3 elements
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); //  ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");   // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const test = tail(["Japan"]); // test with one element
assertEqual(test.length, 0); // should return an empty array
const testTwo = tail([]); // test with an empty array
assertEqual(testTwo.length, 0);   // should return an empty array