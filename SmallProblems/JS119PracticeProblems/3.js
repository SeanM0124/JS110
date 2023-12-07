// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

/*
P/E:

Input: A seemingly natural string, with no punctuation
Output: The same string but every 4th letter in every 2nd word is capitalized

Rules:
- Capilize only the every 4th letter (index + 1 % 4 === 0 ) of
every second word
- Any other character remains the same
- Words are seperated by a single space

DS: Change string into array fo words, chagne word into array of characters

Perform transformation on specific characters, other characters remain the same
A:
- Seperate the string into words
- Iterate over the words. If odd indexd (every 2nd word):
 - Seperate it into its characters
  - Iterate over its characters, changing every 4th char to its
  uppercase version
 - rejoin the word
rejoin and return the string
*/

function toWeirdCase(string) {
  let result = string.split(' ').map((word, index) => {
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