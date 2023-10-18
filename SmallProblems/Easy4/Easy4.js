/*
Write a function that returns true if its integer argument
is palindromic, or false otherwise. A palindromic number reads
the same forwards and backwards.

Input: a Number
Output: A boolean

Rules:
Explicit
- if it is a palindrome number, return true, else false
- must return a boolean

Implicit:
- must change the number to a string to compare.

Algorithm:
I want to compare the numbers as strings, with one of the operands being the
original but reversed. I must reverse it as an array

*/

function reverseNumber(num) {
  return String(String(num).split('').reverse().join(''));
}

function isPalindromicNumber(num) {

  return String(num) === reverseNumber(num);
}


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true