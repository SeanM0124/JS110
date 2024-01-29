/*
Alphabet Symmetry
Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they would
occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters
that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) // [4, 3, 1]

Input will consist of alphabetic characters, both uppercase
and lowercase. No spaces.

P/E:

Input: An array of strings
Output: An array of integers representing the count of letters per string
that are alphabetically symetrical

Rules:


DS: a string of the alphabet

Iterate over the array, and for each string, count how many letters
have the same
index as they have in the alphabet

A:
- Init a result array, to populate and return
 - Iterate over the input array:
  - Take each word, and iterate over its letters:
   - Does the current letter have the same index as it would in the alphabet?
    - If yes, count++
  - Push the count for each word to result array
- Return the result array
*/

// const alpha = 'abcdefghijklmnopqrstuvwxyz';

// function solve(arr) {
//   let result = [];
//   let newArr = arr.map(str => str.toLowerCase());

//   for (let i = 0; i < newArr.length; i++) {
//     let word = newArr[i];
//     let count = 0;
//     for (let j = 0; j < word.length; j++) {
//       if (j === alpha.indexOf(word[j])) {
//         count++;
//       }
//     }
//     result.push(count);
//   }
//   return result;
// }

// // Test cases
// console.log(solve(["abode","ABc","xyzD"])); // [4,3,1]
// console.log(solve(["abide","ABc","xyz"]));  // [4,3,0]
// console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])); // [6,5,7]
// console.log(solve(["encode","abc","xyzD","ABmD"])); // [1, 3, 1, 3]

//-----------------------------------------------------------------------

/*
Difference of Two
The objective is to return all pairs of numbers from a given array of
numbers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate numbers in the array.
The order of the numbers in the input array should not matter.

P/E:

Input: An array of integers
Output: A nested array of integer pairs

Rules:
- If two numbers have a difference of two, push them to the result array
- Return an array whether populated or not


DS: Arrays -> Push intergers pairs as an arary to an array

A:
- Init a result array to push to
- Sort the input array into ascending order
- Use a nested loop pair to test each number with those coming after it
 - If diff === 2, push the pair to the result array
- Return the result array

*/

function differenceOfTwo(arr) {
  let result = [];
  let sortArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortArr.length; i++) {
    for (let j = i + 1; j < sortArr.length; j++) {
      if (sortArr[j] - sortArr[i] === 2) {
        result.push([sortArr[i], sortArr[j]]);
      }
    }
  }
  return result;
}

// Test cases
console.log(differenceOfTwo([1, 2, 3, 4]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7]));
//  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4]));
// [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13]));
// []
