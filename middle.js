
const middle = function(array) {
  let middArr = []; // create an empty array
  if (array.length <= 2) { // check if the array has 2 or less elements
    middArr = []; // return an empty array
  } else if (array.length % 2 === 1) { // check if the array has an odd number of elements
    middArr.push(array[(array.length - 1) / 2]); // push the middle element to the array
  } else if (array.length % 2 === 0) { // check if the array has an even number of elements
    middArr.push(array[array.length / 2 - 1]); // push the first middle element to the array
    middArr.push(array[array.length / 2]); // push the second middle element to the array
  }
  return middArr;
};

module.exports = middle; // export the function
