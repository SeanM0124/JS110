/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides must be
greater than the length of the longest side, and every side must have a length
greater than 0. If either of these conditions is not satisfied, the triangle is
invalid.

Write a function that takes the lengths of the three sides of a triangle as
arguments and returns one of the following four strings representing the
triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

P/E:

Input: 3 integers representing the triangles sides lengths
Output: A string describing which triangle it is, or invalid otherwise

Rules:
- Triangle rules:
 - All 3 sides must be greater than 0
  - Equilateral: All sides are same length
  - Isoceles: 2 sides are same length, while 3rd is different
  - Scalene: All sides are different lengths
 - Sum of the two shortest sides must be greater than the length of the longest

DS: Perhaps an array to store side lengths

A:
- If side1 === side2 && side2 === side3, return "equilateral"
- If side1 === side2 && side2 !== side3 || side1 === side3 && side3 !== side2,
 return "isoceles"
- If side1 !== side2 && side2 !== side3 && side1 !== side3
*/

function triangle(side1, side2, side3) {
  let array = [side1, side2, side3].sort((a, b) => a - b);
  if (invalid(side1, side2, side3, array)) return 'invalid';
  if (scalene(side1, side2, side3)) return 'scalene';
  if (equilateral(side1, side2, side3)) return 'equilateral';
  return 'isoceles';
}

function invalid(side1, side2, side3, array) {
  return ((side1 === 0 || side2 === 0 || side3 === 0 ) ||
  array[0] + array[1] < array[2]);
}

function scalene(side1, side2, side3) {
  return (side1 !== side2 && side1 !== side3 && side2 !== side3);
}

function equilateral(side1, side2, side3) {
  return (side1 === side2 && side1 === side3);
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"