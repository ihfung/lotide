const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(sentence) { // function that takes in a sentence
  let result = {};
  for (const letter of sentence) { // loop through the sentence
    if (letter !== " ") { // check if the letter is not a space
      if (result[letter]) { // check if the letter is already in the object
        result[letter] += 1; // increment the letter in the object
      } else {
        result[letter] = 1; // add the letter to the object
      }
    }
  }

  return result;
};

const sentenceToCount = countLetters("lighthouse in the house");

assertEqual(sentenceToCount["l"], 1);
