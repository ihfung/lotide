const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  }
};

const countLetters = function (sentence) {
  let result = {};
  for (const i of sentence) {
    if (i !== " ") {
      if (result[i]) {
        result[i] += 1;
      } else {
        result[i] = 1;
      }
    }
  }

  return result;
};

const sentenceToCount = countLetters("lighthouse in the house");

assertEqual(sentenceToCount["l"], 1);