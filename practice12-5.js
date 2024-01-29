// Two words are anagrams of each other if they both contain the same letters.

// Write a function that will find all the anagrams of a word from a list.
// You will be given two inputs, a word and an array with words.
// You should return an array of all the anagrams or an empty array if
//there are none.

/*
P/E:
- Input: One word and an array of words
- Output: The anagrams of the first word passed

Rules:
 - Return an array of anagrams or an empty array
 - Two words that contain the same letters are anagrams of eachother
 - always have lowercase

DS: Strings -> Arrays

A:
- Init a result array
- Sort and cache the passed word lexicographically
- Iterate over the array of words
 - Sort each word as I analyze it, lexicographically
  - split, sort, join
 - Compare to the first word passed strictly
  - If its match:
   - Push to result array
   - Otherwise skip
Return the result array.
*/

// function anagrams(word, array) {
//   let sortWord = word.split('').sort().join('');
//   let result = [];
//   array.forEach(words => {
//     if (words.split('').sort().join('') === sortWord) {
//       result.push(word);
//     }
//   });
//   return result;
// }

// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// // ['aabb', 'bbaa']

// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// // ['carer', 'racer']

// console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));
// // []

// ----------------------------------------------------------------------

// The objective is to return all pairs of numbers from a given array of numbers
// that have a difference of 2.
// The result array should be sorted in ascending order of values.
// Assume there are no duplicate numbers in the array.
// The order of the numbers in the input array should not matter.

/*
P/E:

Input: An Array
Output: A nested array, containing pairs of numbers from the input
array that have a difference of two.

Rules:
- Pairs must be placed in array that is pushed to another array
- Difference must be that of two
- Always return an array

DS: Arrays, iteerating over and performing selection


A:
- Init a result array
- Iterate over the array
 - On each iteration, compare the selected number to each other number
  - If the diff === 2:
   - Push the pair as an array to the result array
return the result array
*/

function differenceOfTwo(array) {
  let result = [];
  let criteria = 2;
  for (let index1 = 0; index1 < array.length; index1++) {
    for (let index2 = 0; index2 < array.length; index2++) {
      let difference = array[index1] - array[index2];
      if (difference === criteria) {
        result.push([array[index2], array[index1]]);
      }
    }
  }
  return result;
}

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