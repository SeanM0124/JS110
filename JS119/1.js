// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:

/*
P/E:
D: Arrays -> Array
A:
 - I need to take each element in the array individually, and compare it to
 to each other element in the array, incrementing a count as I go whenever
 I encounter a value that is lesser than the one im holding.
 - Initialize two different values: an array of encountered values, and
 a counter variable.

 Explicit Rules:
 - Check each number, count its lessers
 - Take an array, return an array
 - Count only unique values -> dont count a value twice.

*/

function smallerNumbersThanCurrent(array) {
  let resultArray = [];

  array.forEach(elem1 => {
    let encountered = [];
    let count = 0;
    array.forEach(elem2 => {
      if (encountered.includes(elem2)) return null;
      if (elem1 > elem2) count++;
      encountered.push(elem2);
      return null;
    });
    resultArray.push(count);
  });
  return resultArray;
}


console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]

/*
// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

/*
PE:

Input: An array of Integers
Output: A new array of integers representing the # of integers in the
input array the current number is greater than

Rules:
- Only count a value once
- The returned array should be the same length
- Track seen values.

DS:
I need a way to track valeus ive seen before. After seeing a value, if it isnt already in the tracked ds, add it there
A:
- Create an object to track seen items (in the loop?)
- Init a result array
- Iterate over the array, taking each number:
 - Compare each number to each other number:
  - Have we seen this 2nd number?
  - Is the first selected number greater than these numbers?
   - If yes, temp count increments
   - After each outer iteration, push the count to a result array
   - Add the value to the seen object
- Return result array

/*

function smallerNumbersThanCurrent(array) {
  let result = [];

  array.forEach(elem => {
    let seen = {};
    let count = 0;
    array.forEach((ele) => {
      if (seen[ele]) return null;
      if (elem > ele) count++;
      seen[ele] = true;
    });
    result.push(count);
  })
  return result;
}

// Examples:

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]
*/