/*
Write a function that takes an array of strings and returns
an array of the same string values, but with all vowels removed.

input: an array of strings
ouput an array of strings with all vowels removed

Rules:
- no vowels in the output
- return an array of strings
- empty strings returned are ok, caps and such are fune
- expect only alphabetical characters

A: iterate over the
*/

const vowels = 'aeiou';

function removeVowels(array) {
  let arrNew = array.map(elem => {
    return elem.split('').filter(char => {
      if (vowels.includes(char.toLowerCase())) return false;
      else return true;
    }).join('');
  });
  console.log(arrNew);
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]


/*
function removeVowels(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}
*/

// const vowels = 'aeiou';

// function removeVowels(array) {
//   let result = [];

//   for (let index = 0; index < array.length; index++) {
//     let section = [];
//     let chars = array[index].split('');
//     for (let count = 0; count < chars.length; count++) {
//       if (vowels.includes(chars[count].toLowerCase())) {
//         continue;
//       } else {
//         section.push(chars[count]);
//       }
//     }
//     result.push(section.join(''));
//   }
//   console.log(result);
// }

// removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
// removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
// removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]