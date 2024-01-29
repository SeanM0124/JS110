/*
Write a function that takes a string and returns an object containing the
following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

P/E:

Input: A string
Ouput: An object

Rules:
- There is 3 percentages:
 - Percent of Uppercase letters
 - Percent of Lowercase letters
 - percent that is neither of the above
- Must return an object with the 3 percents above represented as the Key: Values
 - {lowercase: '00.00',...}
- The string will contain atleast one char
- White space falls into neither


DS: Iterate strings and transfer data to an object

A:
- Init an object to transfer data.
- To find percents, I need the total number of characters (length of string)
 - Cache length for total chars
 - Cache number of uppercase chars and lower case chars seperately
  - if neither lower or uppercase letters, its cached to neither
- Find percent:
 - Divide variable by the total, multiple result by 100
  - Fix the result to two decimals
- Store the percents in the object as strings
- Return the object
*/

// function letterPercentages(string) {
//   let result = {};
//   let total = string.length;
//   let lower = 0;
//   let upper = 0;
//   let neither = 0;

//   for (let index = 0; index < string.length; index++) {
//     if (string[index].match(/[a-z]/)) lower += 1;
//     else if (string[index].match(/[A-Z]/)) upper += 1;
//     else neither += 1;
//   }
//   result.lowercase = `${((lower / total) * 100).toFixed(2)}`;
//   result.uppercase = `${((upper / total) * 100).toFixed(2)}`;
//   result.neither = `${((neither / total) * 100).toFixed(2)}`;
//   console.log(result);
//   return result;
// }

function letterPercentages(string) {
  let max = string.length;
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / max) * 100).toFixed(2),
    uppercase: (((string.match(/[A-Z]/g) || []).length / max) * 100).toFixed(2),
    neither: (((string.match(/[^a-z]/gi) || []).length / max) * 100).toFixed(2)
  };
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }