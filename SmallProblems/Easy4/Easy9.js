//Write a function that takes a string of digits and returns
//the appropriate number as an integer.

/*
Input: A string
Output: A Number version of that string

Rules: Cannot use built in conversion methods.

A:
Somehow I need to convert each digit to its number counter part -> how can I
use implicit conversio0n to this end?
*/

function stringToInteger(string) {
  return string * 1;
}


// function stringToInteger(string) {
//   const values = '0123456789';
//   let result = 0;

//   for (let character of string) {
//     result = (result * 10) + values.indexOf(character);
//   }
//   return result;
// }

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true