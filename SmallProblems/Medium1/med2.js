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

function rotateRightmostDigits(number, count) {
  let string = String(number);
  let char = string.charAt(string.length - count);
  let cutHere = string.length - count;
  return Number(string.slice(0, cutHere ) + string.slice(cutHere + 1) + char);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917