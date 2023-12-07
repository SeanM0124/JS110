//Modify the wordSizes function from the previous exercise to exclude
//non-letters when determining word size. For instance,
//the word size of "it's" is 3, not 4.

/*
Input: a String
Output: an object where the keys are length of words and the value
is how often that length occurs. Punctuation and other non
alphanumerical values dont count

Algorhitm: I need to check
*/

function wordSizes(string) {
  let result = {};
  let array = string.split(' ');

  for (let index = 0; index < array.length; index++) {
    let wordSize = removeNonLetters(array[index].toLowerCase().length);
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

function removeNonLetters(string) {
  let result = '';

  for (let index = 0; index < string.length; index++) {
    if (isLetter(string[index])) {
      result += string[index];
    }
  }
  return result;
}

function isLetter(character) {
  return character >= 'a' && character <= 'z';
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}