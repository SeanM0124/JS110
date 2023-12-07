/*
Write a function that takes a positive integer as an argument and returns that
number with its digits reversed.

Input: an Integer
Output: the integer reveresed

Data structure: number -> string -> array -> string -> number

Rules: Input will be positive
return with digits reverese
leading 0's get dropped
*/

function reverseNumber(num) {
  return Number(String(num).split('').reverse().join(''));
}

console.log(reverseNumber(12345));    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1