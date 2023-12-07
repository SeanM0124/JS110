/*
Modify the function from the previous exercise so it
ignores non-alphabetic characters when determining whether it
should uppercase or lowercase each letter.
The non-alphabetic characters should still be included
in the return value; they just don't count when toggling the desired case.

P/E:

Input:
Output:

Rules:
 - Non-Alphabetical characters dont count towards the staggered case
 -

DS: String/Arrays

A:

*/

function staggeredCase(string) {
  let needUp = true;

  let result = string.split('').map(char => {
    char = char.toLowerCase();
    if (char >= 'a' && char <= 'z') {
      if (needUp) {
        needUp = false;
        return char.toUpperCase();
      } else {
        needUp = true;
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('');
  return result;
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);