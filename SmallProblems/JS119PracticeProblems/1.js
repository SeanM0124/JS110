// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:

/*
P/E:

Input: An Array of Integers
Output: A new array, same length as input, with integers representing how many
numbers in the other array are smaller than the number
in the formers respective index

Rules:
- Only count values once, duplicates dont count towards count in 2nd array
- Integers will be greater than 0?
- return empty array?


DS: Arrays

A:
- initialize result array
- For each integer in the input:
 - Iterate through the array, comparing the values to the selected integer
  - cache the amount of numbers greater than it
  - cache the numbers compared already
   - if an equal value is compared, skip it
  - push the count to the result array
- Return result array
*/

// function smallerNumbersThanCurrent(array) {
//   let result = [];
//   array.forEach(integer => {
//     let count = 0;
//     let compared = [];
//     array.forEach((int2) => {
//       if (compared.includes(integer)) return;
//       if (integer > int2) count += 1;
//       compared.push(integer);
//     });
//     result.push(count);
//   });
//   return result;
// }

function smallerNumbersThanCurrent(array) {
  let result = [];
  let arr2 = noDupelicates(array);
  for (let index = 0; index < array.length; index++) {
    let compared = [];
    let count = 0;
    for (let index2 = 0; index2 < arr2.length; index2++) {
      if (array[index] > arr2[index2]) {
        count++;
      }
      compared.push(index2);
    }
    result.push(count);
  }
  return result;
}

function noDupelicates(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}


console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]