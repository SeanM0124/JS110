// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

/*
P/E:

Input: A String of space seperated words
Output: A similar string, but every 4th character of every 2nd word is uppercased

Rules:
- For Every 2nd Word -> Uppercase Every 4th char 

DS: Split strings and words into arrays

Performing iteration and transformation

A:
- Create an array of the strings words:
 - Iterate over the words:
 - Is it a word with and even index?
  - IF yes:
   - Iterate over its characters:
    - Is the character's index + 1 % 4 === 0?
     - If yes, return it uppercased
     - Otherwise, return it
    - Join the word back and return it
  - Join the string back, and return it
*/

function toWeirdCase(string) {
  let words = string.split(' ');

  let result = words.map((word, index) => {
    if (index % 2 === 0) return word;
    return word.split('').map((char, index) => {
      if ((index + 1) % 4 === 0) return char.toUpperCase();
      return char;
    }).join('');
  }).join(' ');
  return result;
}

// Examples:

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".