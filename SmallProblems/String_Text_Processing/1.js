/*
Write a function that takes a string argument and returns
true if all of the alphabetic characters inside the string are
uppercase; false otherwise. Ignore characters that are not alphabetic

Input: String
Output: boolean

Rules:
 - Takes a string
 - returns true if all alphabetical characters of the string are
 uppercase
 - ignore non alphabetical characters
*/

// function isUppercase(string) {
//   const alphabet = /[a-z]/;
//   let array = string.split('');
//   array = array.map(char => alphabet.includes(char));

//   return array.every(char => alphabet.includes(char));

// }

function isUppercase(string) {
  return string.toUpperCase() === string;
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true