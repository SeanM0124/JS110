/*
Write a function that rotates the last count digits of a number.
To perform the rotation, move the first of the digits that you want to
rotate to the end and shift the remaining digits to the left.

P/E:
Will it (count) always be greater than 0?
Take the number that is n count from the end of the given number,
and move it to the end.

Input: A number and a count
Output: A new number formed by moving the digit n count from the end, to the end

DS: Strings, potentially arrays


A:
Use the count parameter to identify which digit we need to move.
  - Transform the number into a string, cache the value of count
  - Seperate the numbers before and numbers after the taken number
   - firstHalf + secondHalf + selected

*/

function rotateRightmostDigits(number, count) {
  let string = String(number);
  let firstHalf = string.slice(0, string.length - count);
  let secondHalf = string.slice(string.length - count);
  let result = firstHalf + secondHalf.slice(1) + secondHalf[0];

  console.log(Number(result));
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 35291


/*
Write a function that rotates the last `count` digits of a `number`.
To perform the rotation, move the first of the digits that you want
to rotate to the end and shift the remaining digits to the left.

Input: Two arguments, one being a number, the 2nd being the count
that I need to rotate

Output: A number that has been rotated per its count

rules:
slice the first digit from the count off, shift the digits after it in
add the sliced digit to the end.
return it as a number

Algorithm: First i must change it to a data type that is easy to rearrange.
To this end, I will change it to a string so I can access the indices,
find the index of the first character i need, remove it, shift the
following elements down, and then add the alement back to the end
*/

// function rotateRightmostDigits(number, count) {
//   let string = String(number);
//   let char = string.charAt(string.length - count);
//   let cutHere = string.length - count;
//   return Number(string.slice(0, cutHere ) + string.slice(cutHere + 1) + char);
// }

// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917