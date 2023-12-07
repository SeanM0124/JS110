// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Examples:

/*
P/E:
D: Array -> integer or null
A:
I need to first check the length of the function with a guard clause.
if the length is less than 5, return null.
If greater, reduce the numbers to their collective sum and return it.

- length check
Do I need to initialize a variable for sum, or shall i directly return the
result of reduce?

I need to take slices of the array and comapre them to eachother as iterate
through.

Rules:
- if length less than 5, return null
- if length 5 or greater, find the lowest sum of 5 consecutive numbers in
the array

*/

function minimumSum(array) {
  if (array.length < 5) return null;
  let minSum = reduct(array.slice(0,5));

  for (let index = 0; index < array.length - 4; index++) {
    if (array.slice(index, index + 5).length < 5) continue;
    let check = reduct(array.slice(index, index + 5));
    if (check < minSum) {
      minSum = check;
    }
  }
  return minSum;
}

function reduct(array) {
  return array.reduce((accum, value) => accum + value, 0);
}

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".