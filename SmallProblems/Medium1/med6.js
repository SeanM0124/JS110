/*
Write a function that takes a string and returns an object containing the
following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

P/E:
- Differentiate between uppercase,
lowercase, and anyother (number, punctuation etc)
- return an object with Key:Values representing the percents
- string will always contain atleast one character

Input: A string of numbers, letters (both case)
Output: an object containing the 3 numbers that represent percentages.

DS: Push values to object keys, perhaps convert
the string to an array to iterate over

A:
- Initialize the Object that will hold the percentages

- Return the object
*/

function letterPercentages(string) {
  let results = {lowercase: "00.00", uppercase: "00.00", neither: "00.00"};
  let upper = 0;
  let lower = 0;
  let neither = 0;
  let total = string.length;

  for (let index = 0; index < string.length; index++) {
    if (isLetter(string[index])) {
      if (isUppercase(string[index])) {
        upper += 1;
      } else lower += 1;
    } else {
      neither += 1;
    }
  }
  results.lowercase = `${((lower / total) * 100).toFixed(2)}`;
  results.uppercase = `${((upper / total) * 100).toFixed(2)}`;
  results.neither = `${((neither / total) * 100).toFixed(2)}`;

  return results;
}

function isUppercase(char) {
  return char === char.toUpperCase();
}

function isLetter(char) {
  return char.match(/[a-z]/i);
}

// function isLowerCase(char) {
//   return char === char.toLowerCase();
// }


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }