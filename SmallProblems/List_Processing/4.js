/*
Write a function that takes a string argument and returns a list
of substrings of that string. Each substring should begin with the
first letter of the word, and the list should be ordered from
shortest to longest.

input: string
output: an array

Rules: return a list of substrings of that string.
Each substring should begin with the first letter of the word, and
should be orderd from shortest to longest.
*/

// function leadingSubstrings(string) {
//   let substrings = [];

//   for (let length = 1; length < string.length; length++) {
//     substrings.push(string.slice(0, length));
//   }
// }

// function leadingSubstrings(string) {

//   let result = string.split('').map((_, index) => string.slice(0, index + 1));
//   console.log(result);
// }

function leadingSubstrings(string) {
  let result = string.split('').map((_, index) => string.slice(0, index + 1));

  console.log(result);
}

// function leadingSubstrings(string) {
//   let substrings = [];

//   for (let index = 0; index < string.length; index++) {
//     substrings.push(string.slice(0, index + 1));
//   }
//   console.log(substrings);
// }


// function leadingSubstrings(string) {
//   let result = [];
//   string.split('').reduce((substring, char) => {
//     result.push(substring + char);
//     return substring + char;
//   }, "");
//   console.log(result);
// }

// function leadingSubstrings(string) {
//   let result = [];

//   string.split('').forEach((_, index) => {
//     result.push(string.slice(0, index + 1));
//   });
//   console.log(result);
// }


leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]