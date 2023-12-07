// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

/*
P/E:

Input: Array
Output: A minimum sum, or Null if length < 5

Rules:
- return Null if array.length < 5
- take the sum of the 5 smallest integers


DS: Reduce an array into an integer

A:
- Check length of array
 - if length < 5, then return null
- Iterate over the array
 - take slices of the array, find the sum, cache it, and compare to the next
  - if new slice is smaller, replace its sum the cached value
- return the last sum standing sum
*/

function minimumSum(array) {
  if (array.length < 5) return null;
  let smallestSum = array.slice(0, 5)
    .reduce((ac, val) => ac + val, 0);

  for (let index = 1; index < array.length - 4; index++) {
    let newSum = array.slice(index, index + 5).reduce((ac, val) => ac + val, 0);
    if (newSum < smallestSum) smallestSum = newSum;
  }
  console.log(smallestSum);
  return smallestSum;
}

// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".