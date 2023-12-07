/*
Write a function that takes a string argument and returns a new string
containing the words from the string arguement in reverse order.
*/

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"