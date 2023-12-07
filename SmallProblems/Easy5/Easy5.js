/*
Write a function that combines two arrays passed as arguments and returns
a new array that contains elements from both array arguements, in alternating
pattern.

Explicit Rules:
Both arrays are non empty, and have same number of elements

Implicit:

Input: Two arrays
Output: one array

A: I will iterate through them, adding the indexs in order as i do

*/

function interleave(array1, array2) {
  let result = [];
  for (let index = 0; index < array1.length; index++) {
    result.push(array1[index], array2[index]);
  }
  console.log(result);
  return result;
}

// function interleave(array1, array2) {
//   let result = [];
//   array1.forEach((elem, index) => {
//     result.push(elem, array2[index]);
//   });
//   console.log(result);
//   return result;
// }

// function interleave(array1, array2) {
//   return array1.reduce((accum, value, index) => accum
//     .concat(value, array2[index]), []);
// }

// function interleave(array, array2) {
//   let target = [];

//   array.forEach((_, index) => {
//     target.push(array[index], array2[index]);
//   });
//   console.log(target);
// }

// function interleave(array1, array2) {
//   let target = array1.map((elem, index) => {
//     return [elem, array2[index]];
//   });
//   console.log(target.flat());
// }

// function interleave(arr, arr2) {
//   return arr.reduce((accum, cv, index) => accum.concat(cv, arr2[index]), []);
// }

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]