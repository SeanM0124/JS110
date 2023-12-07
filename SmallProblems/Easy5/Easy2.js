/*
Write a function that takes two arrays as arguments and returns an array
containing the union of the values from the two.

Input: 2 arrays
Output: a single new array containing the union of the values

Rules: No duplication of values
There is only numbers?
How does the order work?

Implicit: Should be in ascending order? Or order of args?
*/

function union(...args) {
  let result = [];

  args.forEach(arg => noDuplicates(result, arg));
  return result;
}

function noDuplicates(targetArray, sourceArray) {
  sourceArray.forEach(elem => {
    if (!targetArray.includes(elem)) {
      targetArray.push(elem);
    }
  });
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]


