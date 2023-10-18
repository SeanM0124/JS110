/*
Write another function that returns true if the string
passed as an argument is a palindrome, or false otherwise.
This time, however, your function should be case-insensitive,
and should ignore all non-alphanumeric characters.
If you wish, you may simplify things by calling the isPalindrome
function you wrote in the previous exercise.

Input: A string
Output: A boolean

Rules:
 - Case insensitive
 - ignore all non-abc123 characters

Algorithm:
First i need to make all characters same case then
remove all non-abc123 characters
To remove non abc123 characters, i can have a function to test each,
then add those who pass to new string,
then compare that string with itself reversed

Following that i can compare in similar manner as before
*/

function isAlphabet(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}

function removeBadChars(string) {
  let result = '';

  for (let index = 0; index < string.length; index++) {
    if (isAlphabet(string[index]) || isNumber(string[index])) {
      result += string[index];
    }
  }
  return result;
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function isRealPalindrome(string) {
  string = removeBadChars(string.toLowerCase());
  return isPalindrome(string);
}
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');