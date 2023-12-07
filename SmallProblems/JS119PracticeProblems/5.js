// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

/*
P/E:

Input: A string
Output: The character the appears least often in the String

Rules:

DS: Arrays to iterate over to record the amount of times they appear,
save it to an object

A:
 - Create and empty object
 - Split the string into an array
 - Iterate over the array, counting the appearances of the letters
  - Is letter recorded?
   - No: Create the Key value pair -> Letter: 1
   - Yes: Increase the count
 - Take the full object and make an array of its values, sort them in ascending
 - Take first element, use it to get its respective key?

*/
const MASSIVE_UNREASONABLE_NUMBER = 100000000;

function leastCommonChar (arg) {
  let result = {};
  let string = arg.toLowerCase();
  for (let index = 0; index < string.length; index++) {
    if (result.hasOwnProperty(string[index])) {
      result[string[index]] += 1;
    } else {
      result[string[index]] = 1;
    }
  }
  let least = findLeast(result);
  return least;
}

function findLeast(obj) {
  let leastChar;
  let countChar = MASSIVE_UNREASONABLE_NUMBER;

  for (const prop in obj) {
    if (obj[prop] < countChar) {
      leastChar = prop;
      countChar = obj[prop];
    }
  }
  return leastChar;
}

// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".