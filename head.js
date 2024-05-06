
const head = function(array) {
  if (array.length !== 0) {  // check if the array is not empty
    return array[0];  // return the first element
  } else {
    return undefined; //  return undefined if the array is empty
  }
};

module.exports = head; // export the function to be used in other files