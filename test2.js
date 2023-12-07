// Write a function that returns the count of triple of numbers that have 2 odd numbers and 1 even. If there’s none return -1. All numbers in the array will be integers greater than 0. -- Laren


/*
// Write a function that returns the count of triple of numbers
 that have 2 odd numbers and 1 even. If there’s none return -1.
  All numbers in the array will be integers greater than 0.

input: array of integers
output: number (count)
data str: array, numbers

extra rules:
- return -1 if no pairing is found

Algorithm: iterate over array, and count groupings of
            target type (2 odd & 1 even).

- declare a var 'count' set to 0
- iterate over given array of ints, for each index/int
    - declare start idx
    - declare end idx (current idx + 3)
    - declare 'odd' as 0
        - declare var 'even' as 0
        - declare a new array 'currentTriple'
          of 3 elements from current idx to end idx
      - current triple needs to have a length of 3
        - iterate through currentTriple
            - if element in 'currentTriple' is odd
                => increment odd by 1
            - if element in currentTriple is even
                => increment even by 1
        - if odd is 2 and even is 1
            => increment count by 1

- if count is 0, reassign to -1
- return count

*/



function countTriples(arr) {
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
          for (let k = j + 1; k < arr.length; k++) {
              let oddCount = [arr[i], arr[j], arr[k]].filter(num => num % 2 !== 0).length;
              if (oddCount === 2) count++;
          }
      }
  }

  return count > 0 ? count : -1;
}

// 
//[ 1, 2, 3 ]. --
//[ 1, 2, 4 ]
//[ 1, 3, 4 ] --
//[ 2, 3, 4 ]

//console.log(countTriples([1, 2, 3, 4])); // Expected output: 2
//console.log(countTriples([2, 4, 6, 8])); // Expected output: -1
//console.log(countTriples([1, 3, 5, 7])); // Expected output: -1
//console.log(countTriples([1, 2, 3, 4, 5, 6])); // Expected output: 9

// Implement a function, capitalize, that capitalizes all words in a sentences. However, only capitalize if the word is followed by a word starting with a vowel. -- Sean

/*
Understand;

Is there non alphabetical chars? No via the test cases
IS it the whole word or just first char? Just first char

Input: String
Ouput: String

Rules;

Explicit:
- Only capitalize the first letter of the word, and only if the word
after the former word starts with a vowel.

Implicit:
- Expect only Alphabetical Characters.
- Assume each string is only undercase.


DS: String and Array(s)

A:
- initilaie vowels. (Cache the vowels in a constant?)
 - To check first letter of words, reference index 0 of each word
- Seperate the words (spaces) -> array
-Iterate through the words
 - Does the word after start with a vowel?
  - if yes, capitalize first letter of word
  - if no, continue
- Iterate through until the end. If the last index, then end
- log/return the new string
*/

const vowels = 'aeiou';

function capitalize(string) {
  let arrayOfWords = string.split(' ');
  console.log(arrayOfWords[1][0]);
  // console.log(arrayOfWords);

  for (let index = 0; index < arrayOfWords.length - 1; index++) {
    console.log(arrayOfWords[index + 1][0]);
    if (vowels.includes(arrayOfWords[index + 1][0])) {
      arrayOfWords[index][0] = arrayOfWords[index][0].toUpperCase();
    }
  }
  console.log(arrayOfWords.join(' '));
}



//console.log(capitalize("hello apple world")); // "Hello apple world"
//console.log(capitalize("this is an umbrella")); // "This Is An umbrella"
//console.log(capitalize("every vowel starts an echo")); // "every vowel Starts An echo"
//console.log(capitalize("under the oak tree")); // "under The oak tree"
//console.log(capitalize("a quick brown fox")); // "a quick brown fox"

// Write a function, snakecase, that transforms each word in a sentence to alternate between lower (even index value) and upper (odd index value) cases when the word before or after it  begins with "s". -- Nate
/*
 * Problem:
 *  transform words to snake case if they are preceded or followed by a word that begins or ends in S.
 *  Input:
 *    A string
 *  Output:
 *    A string
 *  Rules:
 *    Snake case will be lowercase for even index values and uppercase for odd index values w/r/t the word
 *  Questions:
 *    If a word has non-alphabetic characters (e.g. a hyphen) should that be excluded from the index in snake case?
 *    Does it need to be a lowercase s?
 * Examples/Test Cases:
 *   console.log(snakecase("Snakes slither silently")); // "sNaKeS sLiThEr sIlEnTlY"
 *   console.log(snakecase("simple sentence structure")); // "sImPlE sEnTeNcE sTrUcTuRe"
 *   console.log(snakecase("apples are sweet")); // "apples aRe sweet"
 *   console.log(snakecase("swiftly swimming swans")); // "sWiFtLy sWiMmInG sWaNs"
 *   console.log(snakecase("the sun sets slowly")); // "tHe sUn sEtS sLoWlY"
 *   console.log(snakecase("A quick brown fox")); // "A quick brown fox"
 * Data Structures:
 *  Arrays
 * Algorithm:
 *  1. Split the string into words
 *  2. For each word, check if the previous or following one begins or ends in an s and, if so, snake case the word.
 *  3. join the words together again
 */

function snakecaseWord(string) {
  string = string.split("");
  for (let i = 0; i < string.length; i += 1) {
    if (i % 2 === 1) {
      string[i] = string[i].toUpperCase();
    } else {
      string[i] = string[i].toLowerCase();
    }
  }
  return string.join("");
}
function snakecase(string) {
  let words = string.split(" ");
  return words
    .map((word, index, array) => {
      if (
        (array[index - 1] !== undefined && array[index - 1].match(/^s\w*/i)) ||
        (array[index + 1] !== undefined && array[index + 1].match(/^s\w*/i))
      ) {
        return snakecaseWord(word);
      } else if (
        (array[index - 1] !== undefined && array[index - 1].match(/\w*s$/i)) ||
        (array[index + 1] !== undefined && array[index + 1].match(/\w*s$/i))
      ) {
        return snakecaseWord(word);
      } else {
        return word;
      }
    })
    .join(" ");
}

function snakecase(sentence) {
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
      if ((i > 0 && words[i - 1].toLowerCase().startsWith('s')) ||
          (i < words.length - 1 && words[i + 1].toLowerCase().startsWith('s'))) {
          words[i] = words[i].split('').map((char, index) =>
              index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
          ).join('');
      }
  }
  return words.join(' ');
}


console.log(snakecase("Snakes slither silently")); // "sNaKeS sLiThEr sIlEnTlY"
console.log(snakecase("simple sentence structure")); // "sImPlE sEnTeNcE sTrUcTuRe"
console.log(snakecase("apples are sweet")); // "apples aRe sweet"
console.log(snakecase("swiftly swimming swans")); // "sWiFtLy sWiMmInG sWaNs"
console.log(snakecase("the sun sets slowly")); // "tHe sUn sEtS sLoWlY"
console.log(snakecase("A quick brown fox")); // "A quick brown fox"

// Given an array of numbers, return the count of all combination of 3 numbers where the values are in decreasing order.  -- Robert
function countDecreasingTriplets(arr) {
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
          for (let k = j + 1; k < arr.length; k++) {
              if (arr[i] > arr[j] && arr[j] > arr[k]) {
                  count++;
              }
          }
      }
  }

  return count;
}

5 4 3 2 1
5 4 3
5 3 2
...
  4 3 2
  4 3 1 
    3 2 1
    
function countTriples(arr) {
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
          for (let k = j + 1; k < arr.length; k++) {
              let oddCount = [arr[i], arr[j], arr[k]].filter(num => num % 2 !== 0).length;
              if (oddCount === 2) count++;
          }
      }
  }

  return count > 0 ? count : -1;
}
//console.log(countDecreasingTriplets([5, 4, 3, 2, 1])); // Expected output: 10
//console.log(countDecreasingTriplets([-1, -2, -3, 4])); // Expected output: 1
//console.log(countDecreasingTriplets([1, 2, 3, 4, 5])); // Expected output: 0 (No combinations)