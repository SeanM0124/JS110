/*
Write a function that takes a string, and doubles every character
then returns the result.

Input: A string
Output: The same string with characters doubled.

Algorithm: Change sgtring into an array, double each value, join into an array
*/

function repeater(string) {
  return string.split('').map(char => char + char).join('');
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""