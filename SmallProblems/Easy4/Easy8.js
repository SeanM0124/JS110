//Given a string of words separated by spaces, write a function that swaps
//the first and last letters of every word.

/*
Input: a String
Output: a string where each word has its first and last letter swapped

Algorithm: Easiest way to iterate through this i believe is as an array.
I will first seperate the string into its words, and swap the first and last
character of eac hword indexed in the array,
then join it back seperated by spaces.
*/

function swap(string) {
  return string.split(' ').map(word => {
    if (word.length === 1) return word;
    if (word.length === 2) return word[1] + word[2];

    let first = word[0];
    let last = word[word.length - 1];
    return last + word.slice(1, -1) + first;
  })
    .join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"