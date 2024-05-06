const eqArrays = function(arr1, arr2) {
  let result = true;
  if (arr1.length !== arr2.length) { // check if the length of the arrays is the same
    result = false;
  }
  for (let i = 0; i < arr1.length; i++) { // loop through the arrays
    if (arr1[i] !== arr2[i]) { // check if the elements of the arrays are the same
      result = false;
    }
  }
  return result;
};

module.exports = eqArrays; // export the function to be used in other files