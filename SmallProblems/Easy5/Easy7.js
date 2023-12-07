/*
Write a function that takes two array arguments, each containing a list of
numbers, and returns a new array that contains the product of each pair of
numbers from the arguments that have the same index.

Input: two arrays
Output: one array

Explicit Rules:
 - Multiple the first index of both arrays, add to new array
 - Arrays are same length
 - return a new array - NO MUTATION

Algorithm: I think its super easy with a for loop, but id like to
try the built in methods.

I need to iterate through, and multiple the index of each array
by its counterpart in the other array.

Im returning a new array, map seems promising. Do i need multiple
methods?

*/

function multiplyList(arr1, arr2) {
  let result = arr1.map((elem, index) => {
    return elem * arr2[index];
  });
  console.log(result);
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]