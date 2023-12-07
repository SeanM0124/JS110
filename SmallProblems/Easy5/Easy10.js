/*
Write a function that takes one argument, an array of integers, and returns
the average of all integers in the array, rounded down to the integer component
of the average. The array will never be empty, and the numbers will always be
positive integers.

Input: An array of integers
Output: Returns the average rounded down

Explicit Rules:
 - Rounds the return down to its integer.
 - return the average
 - array will never be empty
 - numbers will always be greater than 0 integers
Implicit Rules:
 - return a number

Algorithm: Use the reduce function to add the elements of the array, and the
divide the numbers by length of array to determine the average.
*/

function average(array) {
  console.log(Math.floor(
    (array.reduce((accum, value) => accum + value, 0)) / array.length));
  return (Math.floor(
    (array.reduce((accum, value) => accum + value, 0)) / array.length));
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40