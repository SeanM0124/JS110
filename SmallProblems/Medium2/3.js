/*
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must be exactly 180 degrees,
and every angle must be greater than 0. If either of these conditions is not
satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and
returns one of the following four strings representing the triangle's
classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry
about floating point errors. You may also assume that the arguments are in
degrees.

P/E:

Input: 3 integers representing the degrees of a triangle
Output: A string representing the type of triangle based of its 3 degrees

Rules:
 - Obtuse triangles have one angle greater than 90 degrees
 - Right triangles have one angle that is exactly 90 degrees
 - Acute triangles have all angles less than 90 degrees
If the degrees add to more than 190 degrees, its invalid
If any degrees are 0, its invalid


DS:

A:
- If any angle is larger than 90 degrees, return obtuse
*/

function triangle(deg1, deg2, deg3) {
  let angles = [deg1, deg2, deg3].sort((a, b) => a - b);
  let total = angles.reduce((acc, val) => acc + val, 0);

  if (invalid(angles, total)) return 'invalid';
  if (rightTriangle(angles)) return 'right';
  if (obtuse(angles)) return 'obtuse';
  return 'acute';
}

function invalid(angles, total) {
  return (total !== 180 || angles.includes(0));
}

function rightTriangle(angles) {
  return (angles.some(elem => elem === 90));
}

function obtuse(angles) {
  return (angles.some(elem => elem > 90));
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"