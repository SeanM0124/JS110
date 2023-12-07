// Implement the function/method, minimum shorten. The function shortens a sentence such that it will fit within the character limit set. It shortens by removing vowels in the sequence of a, e, i, o, and u. Start removing from the end of the sentence. If it can not be shortened to fit within character limit, return an empty string. Spaces don’t count for the limit. -- Valerie

/*Problem : Implement the function/method, minimum shorten. 

The function shortens a sentence such that it will fit within the character limit set. 
-It shortens by removing vowels in the sequence of a, e, i, o, and u. 
-Start removing from the end of the sentence. 

-If it can NOT be shorted to fit within character limit, return an empty string. 
-Spaces don’t count for the limit. -- Valerie

Example:
("Hello World", 8)); // Hllo Wrld
    -remove "e" first, then remove "o"

Algorithm:
  -input: a string, and an integer representing the length of output string minus whitespaces 
  -output: a string 

  -Rules:
    -given a string, start removing any of the vowels IN ORDER from the end of the string, so 
    that the modified string equals the length of the second arg input 
    -empty spaces do NOT count as a character for the final length 
    -if input string's length is equal or less then length input, return an empty string 

1. get length of input string and save to variable
2. modify input string into an array without white spaces and save it's length to 
  `lengthOfInputStrWithoutWhiteSpaces`
3. get number of vowels to remove by subtracting the modified string's length from 
   input length 
4. create variable `vowels` and initialize to a string of the vowels

==> guard clause for cases when I need to return empty string 

6. set a `limit` variable to 0 

7. iterate over vowels string, 
      -iterate backwards over input str 
      -if char at a certain index is identical to first vowel, then, 
        -slice it out, and save to `newStr`
        - increase count by 1
        -if count is equal to num of vowels to remove 
         -return `newStr`;     

*/

// 1. if lenght lengthOfStrWithoutSpaces
// 2. vowels outer loop
// 3. sentence inner loop
//   4. remove vowel 
//     5. check nonWhiteSpace 
//

function minimumShorten(sentence, limit) {
  let nonSpaceCount = sentence.replace(/\s/g, '').length;
  if (nonSpaceCount <= limit) return sentence;

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let shortened = sentence;

  for (let vowel of vowels) {
      while (nonSpaceCount > limit && shortened.includes(vowel)) {
          const index = shortened.lastIndexOf(vowel);
          shortened = shortened.substring(0, index) + shortened.substring(index + 1);
          nonSpaceCount--;
      }
  }

  return nonSpaceCount <= limit ? shortened : '';
}

//function minimumShorten(string, length) {
//  let originalLengthOfStr = string.length;
//  let arrayStr = string.split("").filter((char) =>  char !== " ");
//  let lengthOfStrWithoutSpaces = arrayStr.length;
//
//  let numOfVowelstoRemove = lengthOfStrWithoutSpaces - length;
//
//
//
//  return ;
//}





// Test cases
// console.log(minimumShorten("This is a test sentence", 18)); // This is  test sentence
// console.log(minimumShorten("Hello World", 8)); // Hllo Wrld
// console.log(minimumShorten("Short", 10)); // Short
// console.log(minimumShorten("A very long sentence with many vowels", 10)); // ""

// Write a function that returns the maximum possible consecutive alternating odd and even (or even and odd) numbers. Minimum possible length is 2. If there’s none return []. -- Sean 

/*
P/E

Input: An array
Output: An array consisting of a slice of the previous array,
alternating even and odd, the longest possible.

Rules:
- The longest slice possible.
- Numbers must be alternating between even and odd
- Must be a min length of 2 numbers
- Always return an array (even empty)


DS: Probably only arrays. I will iterate and push to and from arrays.

A:
- Init an empty result array to populate and return
- Init an empty array to cache values as I iterate
- Iterate over the array:
 - Is it the first number?
  - Add it to temp array
 - If its not the first number:
  - Is the current number % 2 === the last number of the temp array?
 - If neither is the temp array longer than resulat array?
  - if Yes, reassign result array
  - Reset temp array
   - Cache the current value to compare to next value


  - Is length less than two? Then return [];
- Return the result array
*/


// function longestAlternatingSubarray(arr) {
//   let longest = [];
//   let current = [];
//   for (let index = 0; index < arr.length; index++) {
//     if (current.length === 0) {
//       current.push(arr[index]);
//     } else if (arr[index] % 2 !== current[current.length - 1] % 2) {
//       current.push(arr[index]);
//     } else {
//       if (current.length > longest.length) {
//         longest = current;
//       }
//       current = [];
//       current.push(arr[index]);
//     }
//   }
//   if (current.length > longest.length) {
//     longest = current;
//   }
//   if (longest.length < 2) return [];
//   return longest;
// }

// console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
// console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
// console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
// console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
// console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: [6, 7, 12, 11]

// Write a function that returns the longest consecutive numbers that are factors of the given target number. -- Laren

/*
input: (1) array of numbers, (2) target number
output: an array of numbers (subset from original array)
data str: arrays

extra rules:
- if some groups have the same length, take the first group that appears
in the original array
    ex: ([2, 4, 6, 8, 10], 40) // Expected: [2, 4] not [8, 10]

algorithm: while finding all possible consec groups of target factors
           if current group is longer than longest, reassign longest to
           current group - return that group

- declare variable 'longestGroup', set to empty array
- declare variable 'currentGroup', set to empty array
- iterate through input array for each number
    - if current number is a factor of the target number
        => append current number to 'currentGroup'
    - else
        => reassign currentGroup to an empty array

    - if currentGroup length is longer than longestGroup length
        => reassign longestGroup to currentGroup

- return longestGroup
*/

// function longestConsecutiveFactors(arrayOfNums, targetNum) {
//   let longestGroup = [];
//   let currentGroup = [];

//   arrayOfNums.forEach(num => {
//     if (targetNum % num === 0) {
//       currentGroup.push(num);
//     } else {
//       currentGroup = [];
//     }

//     if (currentGroup.length > longestGroup.length) {
//       longestGroup = currentGroup;
//     }
//   });

//   return longestGroup;
// }

// console.log(longestConsecutiveFactors([1, 2, 11, 12, 5, 4], 60)); // Expected: [12, 5, 4]
// console.log(longestConsecutiveFactors([1, 2, 3, 4, 5, 6], 12)); // Expected: [1, 2, 3, 4]
// console.log(longestConsecutiveFactors([10, 15, 20, 25, 30], 150)); // Expected: [10, 15]
// console.log(longestConsecutiveFactors([1, 3, 7, 9], 21)); // Expected: [1, 3, 7]
// console.log(longestConsecutiveFactors([2, 4, 6, 8, 10], 40)); // Expected: [2, 4]

// Find all triple of words in the sentence that have at least 2 vowels in them.  -- Jason

// console.log(findTripleWithVowels("This is a test sentence with some vowels")); // [["sentence", "some", "vowels"]]
// console.log(findTripleWithVowels("The quick brown fox jumps over the lazy dog")); // []
// console.log(findTripleWithVowels("Beautiful, bright, and sunnier days are lovely")); 
// [
//  [ 'Beautiful,', 'sunnier', 'are' ],
//  [ 'Beautiful,', 'sunnier', 'lovely' ],
//  [ 'Beautiful,', 'are', 'lovely' ],
//  [ 'sunnier', 'are', 'lovely' ]
// ]
/*
P:
  -In a given string, find words that have 2 or more vowels 
  -Input: string
  -output: array of strings within an array 

  explicit: at least 2 or more vowels per word in string
  implicit: if no words with vowels, return empty array 
  
E:
'This is a test sentence with some vowels' -> sentence (2 es), some(o, e), vowels(o, e , s)
D:
  - string
  - array
  -split method, includes method
A:
  - declare and init empty array - result arr
  - declare and init vowels variale which stores 'aeiou'
  - split string into words, and make it lowercase -> [this, is, a, test, sentence, with, some, vowels]
  -store that into a variable name 'words'
    - iterate through each words, check if the current word includes a vowel
    -declare and init vowelCount and set to 0
      - iterate through word, for each char, check if it includes a vowel
        - if it does, increment vowels's count
      - if vowelCount is greater or equal to the count of 2, then push that word into the result array

  -return result 
  
C:

*/
//
//function findTripleWithVowels(str) {
//  let result = [];
//  let vowels = 'aeiou';
//
//  let words = str.toLowerCase().split(' ')
//  //console.log(words)
//
//   for (let word of words) {
//          let vowelCount = 0;
//          for (let char of word) {
//              if (vowels.includes(char)) {
//                  vowelCount++;
//              }
//          }
//          if (vowelCount >= 2) {
//              result.push(word);
//          }
//      }
//      return result;
//  }
//

function countVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  for (let char of word.toLowerCase()) {
      if (vowels.includes(char)) {
          vowelCount++;
      }
  }
  return vowelCount;
}

function findTripleWithVowels(sentence) {
  const words = sentence.split(/\s+/);
  const wordsWithTwoVowels = words.filter(word => countVowels(word) >= 2);
  const result = [];

  for (let i = 0; i < wordsWithTwoVowels.length - 2; i++) {
      for (let j = i + 1; j < wordsWithTwoVowels.length - 1; j++) {
          for (let k = j + 1; k < wordsWithTwoVowels.length; k++) {
              result.push([wordsWithTwoVowels[i], wordsWithTwoVowels[j], wordsWithTwoVowels[k]]);
          }
      }
  }

  return result;
}


//console.log(findTripleWithVowels("This is a test sentence with some vowels")); // [["sentence", "some", "vowels"]]
//console.log(findTripleWithVowels("The quick brown fox jumps over the lazy dog")); // []
//console.log(findTripleWithVowels("Beautiful, bright, and sunnier days are lovely"));
// [
//  [ 'Beautiful,', 'sunnier', 'are' ],
//  [ 'Beautiful,', 'sunnier', 'lovely' ],
//  [ 'Beautiful,', 'are', 'lovely' ],
//  [ 'sunnier', 'are', 'lovely' ]
// ]



// Given a sentence, find all pairs of words whose first letter matches the last letter of it pair. Return an empty array if there’s no such pair. Only consider words that have at least length of 2 for the pairings. -- Robert
 
// console.log(findMatchingPairs("The cat in the hat")); // [ [ 'The', 'cat' ], [ 'The', 'hat' ], [ 'the', 'hat' ] ]
// console.log(findMatchingPairs("A man a plan a canal Panama")); // []
// console.log(findMatchingPairs("This sentence has no pairs")); // [ [ 'sentence', 'has' ], [ 'sentence', 'pairs' ] ]
// console.log(findMatchingPairs("Apple leads to leap")); // []

/*

input: string
output: nested array

problem: given a sentence of words, return a nested array with each subarray containing a pair of words that meet the requirements (first letter of first word matches last letter of second word in pair) 

rules: 
- input: 
  - First word is title cased in input string
- output: 
  - 

'The cat in the hat'
=> ["The", "cat", "in", "the", "hat"]
=> "T", "h", "e", "c", "a", "t"

algo:
- INIT `resultArray` to empty array
- INIT `words` to return value of separating input string into array of words
- FOR loop over each word of input string (INIT `idx` to 0, loop until length of array - 2)
  - FOR loop over the adjacent word of input string (INIT 'jdx` to 'idx` + 1, loop until length of array - 1)
    - if first letter of first word matches the last letter of second word
      - append as a subarray to `resultArray`
- if length of `resultArray` is equal to 0, return empty array
- return `resultArray`
*/

// function findMatchingPairs(string) {
//   let resultArray = [];

//   let words = string.split(' ');
//   // console.log({ words });

//   for (let idx = 0; idx < words.length - 2; idx++) {
//     for (let jdx = idx + 1; jdx < words.length - 1; jdx++) {
//       let firstWord = words[idx];
//       let secondWord = words[jdx];
//       // console.log({ firstWord }, { secondWord });
//       if (firstWord[0] === secondWord[secondWord.length - 1]) {
//         resultArray.push([firstWord, secondWord]);
//       }
//     }
//   }
//   if (resultArray.length === 0) {
//     return [];
//   }
//   return resultArray;
// }

// console.log(findMatchingPairs('The cat in the hat')); // [ [ 'The', 'cat' ], [ 'The', 'hat' ], [ 'the', 'hat' ] ]
// console.log(findMatchingPairs('A man a plan a canal Panama')); // []
// console.log(findMatchingPairs('This sentence has no pairs')); // [ [ 'sentence', 'has' ], [ 'sentence', 'pairs' ] ]
// console.log(findMatchingPairs('Apple leads to leap')); // []
function findMatchingPairs(sentence) {
  const words = sentence.split(/\s+/);
  const result = [];

  for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j < words.length; j++) {
          if (words[i].length >= 2 && words[j].length >= 2) {
              if (words[i][0].toLowerCase() === words[j][words[j].length - 1].toLowerCase()) {
                  result.push([words[i], words[j]]);
              }
          }
      }
  }

  return result;
}
