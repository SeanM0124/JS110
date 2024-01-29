// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

/*
PE:

Input: A string
Output: A single character, the one that appears least in the string

Rules:
- Return the character the appears the least
 - IF multiple characters appear the least, return the one that appears first.
- Case insensitive

DS: An object to count the character appearances, maybe split the string by characters

A:
 - Cache the lowercased version of the string
 - Create a result variable to return
 - Split the string into an array and iterate over it:
  - Is the char seen?
   - Yes, increment it
   - No, create its record
  - Iterate over the object
  - Is the current keys value, lower than the cached lowest?
   - If yes, save the key to result
- Return result

*/

function leastCommonChar(string) {
  let seen = {};
  let result;
  string.toLowerCase().split('').forEach(char => {
    seen[char] ? seen[char]++ : seen[char] = 1;
  });
  let lowest = string.length + 1;
  for (let char in seen) {
    if (seen[char] < lowest) {
      result = char; lowest = seen[char];
    }
  }
  return result;
}

// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".