/*
Write a function that takes a string as an argument and returns that
string with the first character of every word capitalized and all
subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.

P/E:

Input: String
Output: a New string with first letters of the words capitalized

Rules:
- Capitalize only the first letter of each word.
- return the new string.

DS: String -> array -> string

*/
// function wordCap(string) {
//   let array = string.split(' ');

//   for (let index = 0; index < array.length; index++) {
//     let first = array[index][0];
//     let remainder = array[index].slice(1);

//     array[index] = first.toUpperCase() + remainder.toLowerCase();
//   }
//   console.log(array.join(' '));
// }

// function wordCap(words) {
//   let result = words
//     .split(" ")
//     .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
//     .join(" ");
//   console.log(result);
// }

function wordCap(string) {
  let result = string.split(' ')
    .map(word => word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  console.log(result);
}


wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'