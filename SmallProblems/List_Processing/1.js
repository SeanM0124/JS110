/*
Write a function that takes one argument, a positive integer,
and returns the sum of its digits. Do this without using for,
while, or do...while loops - instead, use a series of method calls
to perform the sum.

Input: An integeer greater than 0
Output: the sum of the integers digits

Rules:
No loops, only method chains
Return a number that is the sum of the digits of the number

*/


function sum(num) {
  return String(num).split('').reduce((accum, value) => accum + Number(value), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45