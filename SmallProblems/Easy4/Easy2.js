/*
Write a function that returns true if the string
passed as an argument is a palindrome, or false otherwise.
A palindrome reads the same forwards and backwards.
For this problem, the case matters and all characters matter.

Input: A string
Output: a boolean

Rules:
 - input is a string
 - word must be a palindrome to return true.
 - case matters
 - all characters matter
 - empty strings?

 Algorithm:
Take a string and determine/return if its reversal strictly equals it.
*/


// function isPalindrome(string) {
//   let stringReverse = string.split('').reverse().join('');
//   if (string === stringReverse) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}


isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true