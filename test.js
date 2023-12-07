/* eslint-disable max-lines-per-function */
// /*
// Take the number 735291 and rotate it by one digit to the left,
// getting 352917.
// Next, keep the first digit fixed in place and rotate the
// remaining digits to get 329175. Keep the first two digits fixed
// in place and rotate again to get 321759. Keep the first three
// digits fixed in place and rotate again to get 321597.
// Finally, keep the first four digits fixed in place and rotate
// the final two digits to get 321579. The resulting number is
// called the maximum rotation of the original number.

// Write a function that takes an integer as an argument and
// returns the maximum rotation of that integer.
// You can (and probably should) use the rotateRightmostDigits
// function from the previous exercise.
// */

// function rotateRightmostDigits(number, count) {
//   let numberString = String(number);
//   let firstPart = numberString.slice(0, numberString.length - count);
//   let secondPart = numberString.slice(numberString.length - count);
//   let resultString = firstPart + rotateString(secondPart);

//   return Number(resultString);
// }

// function rotateString(string) {
//   return string.slice(1) + string[0];
// }

// function maxRotation(number) {

// }

// maxRotation(735291);          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845


// Write a function that returns the maximum possible consecutive
//alternating odd and even (or even and odd) numbers.
//Minimum possible length is 2. If there’s none return []. -- Sean

/*
P/E

Input: An array
Output: An array consisting of a slice of the previous array,
alternating even and odd, the longest possible.

Rules:
- The longest slice possible.
- Numbers must be alternating between even and odd
- Must be a min length of 2 numbers
- Always return an array (even empty)


DS: Probably only arrays. I will iterate and push to and from arrays.

A:
- Init an empty result array to populate and return
- Init an empty array to cache values as I iterate
- Iterate over the array:
 - Is it the first number?
  - Add it to temp array
 - If its not the first number:
  - Is the current number % 2 === the last number of the temp array?
 - If neither is the temp array longer than resulat array?
  - if Yes, reassign result array
  - Reset temp array
   - Cache the current value to compare to next value


  - Is length less than two? Then return [];
- Return the result array
*/


function longestAlternatingSubarray(arr) {
  let longest = [];
  let current = [];
  for (let index = 0; index < arr.length; index++) {
    if (current.length === 0) {
      current.push(arr[index]);
    } else if (arr[index] % 2 !== current[current.length - 1] % 2) {
      current.push(arr[index]);
    } else {
      if (current.length > longest.length) {
        longest = current;
      }
      current = [];
      current.push(arr[index]);
    }
  }
  if (current.length > longest.length) {
    longest = current;
  }
  if (longest.length < 2) return [];
  return longest;
}

// function longestAlternatingSubarray(array) {
//   let result = [];

//   for (let index = 0; index < array.length; index++) {
//     let sliceOf = [];
//     sliceOf[0] = array[index];
//     if (sliceOf[0] % 2 === 0) {

//     } 
//   }
//   return result;
// }

// function isOdd(num) {
//   return num % 2 === 1;
// }

console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: [6, 7, 12, 11]