//Session with Mat Dwyer TA

/*
// Problem Description
// Given an array of strings, return a boolean indicating whether
// at least three of the elements in the array have digits whose sum is
// divisible by 3.

// Elements of the argument array will be strings containing
only string digits 0-9.

// For example:
// In the array ['35', '01110', '126', '57', '13'],
// the sum of the digits of each element will be: [8, 3, 9, 12, 4]
// from the resulting sums, there are 3 that are
evenly divisible by 3: [3, 9, 12]
// so our function would return true.
See the below test cases for more examples.
P/E:

Input: An array of strings that contain numbers
Output: A boolean, indicating if at least 3 elements sums are divisible by 3.

Rules:
- Sum of each array index '111' = 3
-

DS: Covnerting between strings, arrays and numbers

A:
 - Init a count variable to track elems divisible by 3
 - Iterate over the array:
  - For each element:
  - Reduce and convert the digits into one sum
   - If the sum is divisble by 3, increment a count
   - If the count is 3 or more, return true
- If reach end and count is not 3 or greater, return false
*/

// function threeByThree(array) {
//   let count = 0;
//   array.forEach(elem => {
//     let sum = elem.split('').reduce((start, next) => start + Number(next));
//     if (sum % 3 === 0) count++;
//   });
//   return count >= 3;
// }

// console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']));
// // true
// console.log(threeByThree(['01112', '2043', '12043']));
// // false
// console.log(threeByThree(['01112', '2043']));
// // false
// console.log(threeByThree(['93', '9', '1', '25', '1212']));
// //true

//----------------------------------------------------------------------


/*
P/E:

Input: An array of integers
Output: The index that indicates the left and right sides are equal

Rules:
- If there is no index that would make this happen, return -1;
- Return the index that splits to equal halves
- Empty arrays have the value of 0

DS: Arrays -> Sum different windows of the array as you iterate over. Look for
1st half to === 2nd half.

A:
- Iterate over the array, taking slices of it
 - firstHalf is the numbers up to but not including the index
 - 2nd half is starting at but not indcluding the index
 - Are the sides equal?
 - If yes, return the index, otherwise continue iterating.
*/

function findEvenIndex(array) {
  let answer = -1;
  for (let index = 0; index < array.length; index++) {
    let firstHalf = array.slice(0, index).reduce((a, b) => a + b, 0);
    let secondHalf = array.slice(index + 1).reduce((a, b) => a + b, 0);
    if (firstHalf === secondHalf) answer = index;
  }
  return answer;
}

// Test Cases
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3); // true
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1); // true
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1); // true
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3); // true
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0); // true
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6); // true
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3); // true


//--------------------------------------------------------------------------


// Problem Description
// Write a function that will return the count of distinct case-insensitive
// alphabetic characters and numeric digits that occur more than once in the
// input string.

// The input string can be assumed to contain only alphabets
// (both uppercase and lowercase) and numeric digits.

/*
P/E:

Input: String
Output: Return a intenger representing the coutn of reptitions

Rules:
- Case insensitive
- Counting letters and numbers that repeat themselves


DS: PArseing the string, and creating an array of the cahracters
that repeat themselves

I want to populate an array with the characters that occur more
than once and take that arrays length

A:
- Develop regex to match with characters or numebrs that occur more than once
- Compare the string to the regex, collecting the matched characters
in to an array
- Return the length of that array

*/

// function duplicateCount(string) {
//   return (string.toLowerCase().split('').sort().join('')
//     .match(/(\d|[a-z])\1+/gi) || []).length;
// }

// function duplicateCount(string) {
//   let sortString = string.toLowerCase().split('').sort().join('');
//   return (sortString.match(/(\d|[a-z])\1+/g) || []).length;
// }

// // Test Cases
// console.log(duplicateCount('')) == 0;
// console.log(duplicateCount('abcde')) == 0;
// console.log(duplicateCount('abcdeaa')) == 1;
// console.log(duplicateCount('abcdeaB')) == 2;
// console.log(duplicateCount('Indivisibilities')) == 2;

//-----------------------------------------------------------------------------

// Problem Description
// Given the string of chars alphabetic characters limited to a-z,
//do as in the sample cases.
// Each character in the string argument should appear in the returned string.
// The original character should be repeated as many times as its
//original position in the string argument.
//(index 0 being position 1, index 1 being position 2...)
// The repeated sequences of a character should be separated by a
//hyphen in the returned string.
// In the repeated sequences of a character included in the
//returned string, the first instance of the character should
//be upper-case.  Subsequent instances of the character should be lowercase.

/*
P/E:

Input: A short string
Output: A new string, where each char of the input string
is repeated based on its index number + 1, and the first one is capitalized
the chars are seperated by dashes

Rules:
- Seperate each char by a dash
- Repeat the char by its index + 1
- Capitalize the first char of each repetition
-

DS: I think i can just use an empty string, or perhaps an array

A:
- create an empty array to push onto
- Iterate over each char, taking its index.
 - Repeat each char the number of times of its index + 1
  - The first char should be capitalized
- Join the array with dashes

*/

// function accum(string) {
//   let result = [];
//   string.split('').forEach((char, index) => {
//     result.push(`${char.toUpperCase()}${char.toLowerCase().repeat(index)}`);
//   });
//   return result.join('-');
// }

// // Test Cases
// console.log(accum('abcd')); // "A-Bb-Ccc-Dddd"
// console.log(accum('RqaEzty')); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum('cwAt'); // "C-Ww-Aaa-Tttt"