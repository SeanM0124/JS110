/*
Write a function that takes a string as an argument and returns
that string with a staggered capitalization scheme.
Every other character, starting from the first,
should be capitalized and should be followed by
a lowercase or non-alphabetic character.
Non-alphabetic characters should not be changed,
but should be counted as characters for determining when to switch
between upper and lower case.

P/E:

Input: A string
Output: A new string

Rules:
- Even Indices are caps
- Odd Indices are lowercase
- non alphabetical characters are unchanged

DS: String, maybe array?

A:
 - Analyze the string character by character, iterating over
 - perform transformation on the string
  - If even index and alphabetical char -> make Caps
  - If odd index and alphabetical char -> make lowercase
  - keep non alphabetical chars the same


*/

function staggeredCase(string) {
  let result = string.split('').map((char, index) => {
    if (index % 2 === 0) {
      return char.toUpperCase();
    } else if (index % 2 === 1) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
  console.log(result);
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"