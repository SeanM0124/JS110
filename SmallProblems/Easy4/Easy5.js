/*
Write a function that takes an array of numbers and
returns an array with the same number of elements,
but with each element's value being the running total from the original array.

Input: An array
Output: An array with same number of elements, whos values are
the running sum of input array.

Rules:

Explicit:
- must take and return an array
- must contain the same number of elements
- new array must hold a running total

Implicit:
-

Algorithm:
I want to iterate through the array and transform the values in the array
The values of the new array should be the sum of the current index and all
indexs before it.
*/

function runningTotal(array) {
  let result = [];
  let sum = 0;

  for (let index = 0; index < array.length; index++) {
    result.push(sum += array[index]);
  }
  console.log(result);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []