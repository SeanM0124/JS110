/*
Write a function that takes an array as an argument and returns an array
that contaisn two elements, each of which is an array.
Split the element in half to two sperate arrays nested in one.
If the numbers are odd, the first half array should hold the center number

Input: An array
Output: A nested array structure

Explicit Rules:
 - Odd length'd arrays should have the cetner number in 1st half
 - even length'd array, even split output nested array

Implicit Rules:
 - empty input, empty nested array output

A: Declare a empty nested array.
Determine length -> if odd do this
place all elements up to and including the center to 1st half
place remaining in 2nd half

if even, split them in half

*/

function halvsies(array) {
  let resultArray = [[],[]];
  if (array.length === 0) return resultArray;

  if (array.length % 2 === 0) {
    let firstHalfPoint = (array.length / 2) - 1;
    resultArray[0] = array.slice(0, firstHalfPoint + 1);
    resultArray[1] = array.slice(firstHalfPoint + 1);
  } else {
    let center = (array.length - 1) / 2;
    resultArray[0] = array.slice(0, center + 1);
    resultArray[1] = array.slice(center + 1);
  }
  console.log(resultArray);
  return resultArray;
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

// [0, 0, 0, 0] // last 1st half = length is 4, 2 -> length / 2 - 1
// [0, 0, 0, 0, 0, 0, 0] //center = length - 1 / 2 = index of center