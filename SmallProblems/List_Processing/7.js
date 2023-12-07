/*
Write a function that takes an array of numbers and returns
the sum of the sums of each leading subsequence in that array.
Examine the examples to see what we mean. You may assume that the
array always contains at least one number.

Input: An array of numbers
Output: Sums the ""

*/

// function sumOfSums(array) {
//   let total = 0;
//   for (let index = 0; index <= array.length; index++) {
//     total += array.slice(0, index).reduce((accum, num) => accum + num);
//   }
//   return total;
// }

// function sumOfSums(numbers) {
//   return numbers
//     .map((_, index) =>
//       numbers.slice(0, index + 1).reduce((sum, value) => sum + value)
//     )
//     .reduce((sum, value) => sum + value);
// }

function sumOfSums(array) {
  let nums = array.map((_, index) => {
    return array.slice(0, index + 1).reduce((sum, value) => sum + value);
  }).reduce((sum, value) => sum + value);
  console.log(nums);
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35