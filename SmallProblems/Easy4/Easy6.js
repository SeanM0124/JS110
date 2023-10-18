/*
Write a function that takes a string consisting of zero or more
space separated words and returns an object that shows the number
of words of different sizes.

Words consist of any sequence of non-space characters.

P:
Input: String
Output: an Object

Explicit rules:
- Words are any sequence of non-space cahracters
- strings will be 0 or more words
- return an object the shows the number of words of different sizes

Data: I need to take a string and return an object, I will need to use an
array for the inbetween. I then iterate over the array, counting how many
words of each length that there are.

Algorithm:
Create an empty object, and create an array of the strings words.
iterate over the array, taking the length of the string, and incrementing a
counter associated with that strings length.
*/

function wordSizes(string) {
  let result = {};
  let array = string.split(' ');

  for (let index = 0; index < array.length; index++) {
    let wordSize = array[index].length;
    if (wordSize === 0) {
      continue;
    }

    if (!result[wordSize]) {
      result[wordSize] = 0;
    }
    result[wordSize] += 1;
  }
  return result;
}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}