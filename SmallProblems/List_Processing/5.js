/*
P/E: I need to fill an array with every possible substring from a given string.
The array should be filled relative to the order of the
characters. (a, ab, abc.. b, bc, ...)
I: String
O: Array of substrings of the given string

D: String -> Array

A: I need to create substrings by for each character in the string, iterating
through the string and pushing each substring to the result array.


*/

// function leadingSubstrings(string) {
//   let substrings = [];

//   for (let length = 1; length <= string.length; length++) {
//     substrings.push(string.slice(0, length));
//   }
//   return substrings;
// }

// function substrings(string) {
//   let substrings = [];
//   for (let index = 0; index < string.length; index++) {
//     let substring = string.substring(index);
//     substrings = substrings.concat(leadingSubstrings(substring));
//   }
//   console.log(substrings);
// }

// we have two functions. The first takes the string incremementing up,
// by the characters, making substrings out of each incrementation

// function substrings(string) {
//   let substrings = [];

//   for (let index = 0; index < string.length; index++) {
//     let substring = string.substring(index);
//     substrings = substrings.concat(leadingSubstrings(substring));
//   }
//   console.log(substrings);
// }

// function leadingSubstrings(string) {
//   let substrings = [];

//   for (let length = 1; length < string.length; length++) {
//     substrings.push(string.slice(0, length));
//   }
//   return substrings;
// }

function leadingSubstrings(string) {
  let substrings = [];

  for (let index = 0; index < string.length; index++) {
    substrings.push(string.slice(0, index + 1));
  }
  return substrings;
}

// function substrings(string) {
//   let list = string.split('');

//   return list.reduce((result, _, index) => {
//     let curString = list.slice(index).join("");

//     result.push(...leadingSubstrings(curString));
//     console.log(result);
//     return result;
//   }, []);
// }

function substrings(string) {
  let substrings = string.split('').map((_, index) => {
    let substring = string.substring(index);
    return leadingSubstrings(substring);
  });
  console.log(substrings.flat());
}

// let substrings = string.split('').map((_, index) => {
//   let substring = string.substring(index);
//   return leadingSubstrings(substring);
// });

substrings('abcde');

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]