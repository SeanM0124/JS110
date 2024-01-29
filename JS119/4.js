// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

function closestNumbers(arr) {
  let result = [arr[0], arr[1]];
  let diff = Math.abs(arr[0] - arr[1]);

  for (let index = 0; index < arr.length; index++) {
    for (let index2 = index + 1; index2 < arr.length; index2++) {
      if (Math.abs(arr[index] - arr[index2]) < diff) {
        diff = Math.abs(arr[index] - arr[index2]);
        result = [arr[index], arr[index2]];
      }
    }
  }
  return result;
}

// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]

/*

// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

/*
PE:

Input: An array of integers
Output: A pair of integers from the input array, whos diff 
was the smallest of the pairs in the input array

Rules:
- Return the pairs as an array with tthe smallest diff
- Assume arrays are populated?
- Abs value of diff

DS: Iterating over arrays

A:
- Cache the first difference in a var
- Store the values in a result array
 - Iterate over, selecting one number at a time
  - Comparing that number, iterate over the other numbers
   - Is the absolute difference smaller than the saved one?
    - Yes, replace it
    - Replace the values in the result array
- Return the result array

function closestNumbers(array) {
  let result = [array[0], array[1]];
  let lowest = Math.abs(array[0] - array[1]);

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let current = Math.abs(array[i] - array[j]);
      if (current < lowest) {
        result = [array[i], array[j]];
        lowest = current;
      }
    }
  }
  return result;
}

// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]
*/