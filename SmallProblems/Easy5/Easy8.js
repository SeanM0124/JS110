/*
Write a function that takes one argument, a positive integer
and returns a list of the digits in the number

Input: A number
Output: An array of the numbers digits

Explicit rules:
 - Return an array
 - Take a Number
 - all numbers are positive

ALgorithm: Change the number to a string, then to an array
*/

function digitList(num) {
  return String(num).split('').map(elem => Number(elem));
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]