// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

/*
P/E:

Empty array?
Negative numbers?

Input: An array of integers
Output: An array consisting of the two values in the previous array
that are closest in value

Rules:
- Return a two number array
- The result array has the numberes with the smallest difference


DS: Array input, array output, how to store difference?
maybe I store the values in an object with the key as the difference?

{20: [5, 25], 10: [25, 15], 4: [15, 11], ...}

A:
- Init an empty object to store diff and pairs
- Iterate through the array:
 - Compare each number to each other number:
  - Iterate and cache the difference.
  - save the resutls and the pair to the object
- Loop through the object, compare the first Key:Value to the rest
 - the smallest difference and its asssociated number pairs are cached


*/

function closestNumbers(array) {
  let result = {};

  for (let index = 0; index < array.length; index++) {
    for (let index2 = 0; index2 < array.length; index2++) {
      if (array[index] === array[index2]) continue;
      let diff = Math.abs(array[index] - array[index2]);
      if (result.hasOwnProperty(diff)) continue;

      result[diff] = [array[index], array[index2]];
    }
  }

  let least = leastDiff(result);
  return least;
}

function leastDiff(obj) {
  let array = Object.keys(obj);
  let least = Number(array[0]);

  array.forEach((_, index) => {
    if (Number(array[index]) < least) least = Number(array[index]);
  });
  return obj[least];
}

// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]