/*
Write a function taht takes a string of digits, and returns the appropriate
number as an integer. The string might have a leading + or - sign, if it has a -
include it in the final result.

Input: string of digits, potentialyl with a - or +
Output: a number version of the input string

Rules: If the input string has a -, include it on the final result.
If a + or no sign at all, dont have a sign on the final result
Input will always have a valid number.

Algorithm: First check for a - sign, if there is one, remove it, convert the
string, and then add the sign back. If there is a +, remove it and perform the
conversion. If nothing, perform the conversion.
*/

function stringToSignedInteger(string) {
  if (string[0] === '-') {
    let num = string.slice(1);
    return 0 - (convertStringToNumber(num));
  } else if (string[0] === '+') {
    let num = string.slice(1);
    return convertStringToNumber(num);
  } else {
    return convertStringToNumber(string);
  }
}

function convertStringToNumber(string) {
  return string * 1;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true