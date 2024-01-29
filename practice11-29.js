/*
Write a function that returns the count of triple of numbers that
have 2 odd numbers and 1 even. If there’s none return -1.
All numbers in the array will be integers greater than 0.

P/E:

Input: An array
Output: A integer representing the count of three-number windows that have
2 odd numbers and 1 even number

Rules:
- If count is 0, return -1
- a 3 element array with 2 odd numbers and one even => count++

DS: Arrays (slices of them), with an iteration strategy

A:
 - Init a count variable to increment and return
 - Iterate over the array taking slices of the array:
  - Iterate over each array slice elements:
   - Init temp variable to count even and odd
   - Is it even or odd?
   - Increment accordingly
  - Was there two odd and 1 event?
   - If yes, increment count
- Is count > 0?
 - Yes return count
 - No return -1
*/

// function countTriples(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       for (let y = j + 1; y < arr.length; y++) {
//         let oddCount = [arr[i], arr[j], arr[y]]
//           .filter(num => num % 2 !== 0).length;

//         if (oddCount === 2) count++;
//       }
//     }
//   }
//   return count > 0 ? count : -1;
// }

// // Test cases
// console.log(countTriples([1, 2, 3, 4])); // Expected output: 2
// console.log(countTriples([2, 4, 6, 8])); // Expected output: -1
// console.log(countTriples([1, 3, 5, 7])); // Expected output: -1
// console.log(countTriples([1, 2, 3, 4, 5, 6])); // Expected output: 9\

//-----------------------------------------------------------------------------

/*
Implement a function, capitalize, that capitalizes all words in a sentences.
However, only capitalize if the word is followed by a word starting
with a vowel (for Ruby don’t use capitalize).

P/E:

Input: A string, consisting of single space sperated words, no punct. no num
Output: Similar String -> If the next word starts with a vowel, capitalize the
first char of the current word

Rules:
- IF the first char of the next word starts with a vowel
then capitalize the first char of the current word


DS: Split the string into its words -> array

A:
 - Split the string into words (split by spaces)
 - Iterate over the words:
  - Does the next word start with a vowel
  - If it does, capitalize the first character of the current word


*/
// const vowels = 'aeiou';

// function capitalize(string) {
//   let words = string.toLowerCase().split(' ');

//   for (let index = 0; index < words.length - 1; index++) {
//     if (vowels.includes(words[index + 1][0])) {
//       words[index] = words[index].charAt(0).toUpperCase()
//       + words[index].slice(1);
//     }
//   }
//   return words.join(' ');
// }

// // Test cases
// console.log(capitalize("hello apple world")); // "Hello apple world"
// console.log(capitalize("this is an umbrella")); // "This Is An umbrella"
// eslint-disable-next-line max-len
// console.log(capitalize("every vowel starts an echo")); // "every vowel Starts An echo"
// console.log(capitalize("under the oak tree")); // "under The oak tree"
// console.log(capitalize("a quick brown fox")); // "a quick brown fox"

//--------------------------------------------------------------------

/*
Write a function, snakecase, that transforms each word in a sentence
to alternate between lower (even index value) and upper
(odd index value) cases when the word before or after it begins with
"s".

P/E:

Input: A string of words
Output: A altered string

Rules:
- If the word before or after begisn with 's':
 - even indexd char go to lowercase
 - odd indexd chars go to uppercase
DS: Arrays

A:
 - Split the sentence into words
 - Iterate over the words
  - Take the current word, If the word after starts with 's' then:
   - The current words even index chars go to lowercase
   - the uppercase chars go to uppercase
*/


// function snakecase(string) {
//   let words = string.split(' ');

//   for (let index = 0; index < words.length; index++) {
//     if ((index > 0 && words[index - 1].toLowerCase().startsWith('s')) ||
//     (index < words.length - 1 && words[index + 1].toLowerCase().startsWith('s'))) {
//       words[index] = words[index].split('').map((char, index) => {
//         if (index % 2 === 0) return char.toLowerCase();
//         return char.toUpperCase();
//       }).join('');
//     }
//   }
//   return words.join(' ');
// }


// // Test cases
// console.log(snakecase("Snakes slither silently")); // "sNaKeS sLiThEr sIlEnTlY"
// console.log(snakecase("simple sentence structure")); // "sImPlE sEnTeNcE sTrUcTuRe"
// console.log(snakecase("apples are sweet")); // "apples aRe sweet"
// console.log(snakecase("swiftly swimming swans")); // "sWiFtLy sWiMmInG sWaNs"
// console.log(snakecase("the sun sets slowly")); // "tHe sUn sEtS sLoWlY"
// console.log(snakecase("A quick brown fox")); // "A quick brown fox"

//------------------------------------------------------------------------------

/*
Given an array of numbers, return the count of all combination of 3
numbers where the values are in decreasing order.

P/E:

Input: An array of integers
Output: A count representing the amount of 3 consecutive numbers
that are in descending order

Rules:
- 3 consecutive numbers, in decreasing order
- Numbers may be negative, 0 or positive
- Cannot sort the array

DS: A simple integer to return, and input array to iterate over

A:
- Iterate over the numbers:
 - Compare the current number to the one after it, is it decreasing?
  - If yes, is the next number also decreasing?
   - If yes, count increments
- Return count after incrementing past all possible 3 consecutiven numbers

*/

function countDecreasingTriplets(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] > array[j] && array[j] > array[k]) {
          count++;
        }
      }
    }
  }
  return count;
}

// Test cases
console.log(countDecreasingTriplets([5, 4, 3, 2, 1])); // Expected output: 10
console.log(countDecreasingTriplets([-1, -2, -3, 4])); // Expected output: 1
console.log(countDecreasingTriplets([1, 2, 3, 4, 5])); // Expected output: 0 (No combinations)