/*
Write a function that takes a string and doubles every
consonant character in the string
*/


function doubleConsonants(string) {
  let consonant = 'bcdfghjklmnpqrstvwxyz';
  let array = string.split('');
  return array.map(char => {
    if (!consonant.includes(char.toLowerCase())) return char;
    return (char + char);
  })
    .join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""


// const noneOfThese = 'aeiou-1234567890!,.?';

// function doubleConsonants(string) {
//   let result = string.split('').map(char => {
//     if (noneOfThese.includes(char.toLowerCase())) return char;
//     return char + char;
//   }).join('');
//   console.log(result);
// }


// doubleConsonants('String');          // "SSttrrinngg"
// doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
// doubleConsonants('July 4th');        // "JJullyy 4tthh"
// doubleConsonants('');                // ""