/*
Write a function thatt takes and array of integers as input and multiplies all
of the integers together, divides the result by the number of entries in the
array, and returns the result as a string with the value rounded
to 3 decimals

Input: an array of integers
Ouput: a string number to 3 decimals

Rules:
take a number
return a string
multiply the numbers, then divide by entires
return result with 3 decimals.

A: multiple the entires by eachother one by one, then divide the product
by the number of numbers used. return the qoutient to 3 fixed deciamls
and to a string
*/

function multiplicativeAverage(array) {
  let result = (array.reduce((accum, cv) => accum * cv , 1) / (array.length));
  // console.log(result.toFixed(3).toString());
  return String(result.toFixed(3));
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

