/*
Write a function that takes a string as an argument and returns true
if all parenthses in the string are properly balanced, false otherwise
To be properly balanced, parantheses must occur in
matching () pairs

Input: a string
Output: a boolean if count of '(' === count of ')'

Rules :
 - return a boolean
 - pairs of parantehses
*/

function isBalanced(string) {
  let parens = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] === '(') {
      parens += 1;
    } else if (string[index] === ')') {
      parens -= 1;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);