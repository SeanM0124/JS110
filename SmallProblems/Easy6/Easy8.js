/*
Write a function that takes a string argument containing one or more words,
and returns a new string containing words from the string argument.
All 5 or more letter words should have their letters in
reverse orer. The strign argument will consist of only letters and spaces.
Words will be seperated by a single space.

Input: A string
Output: a string with the words that have length greater than 4 reversed

rules:
IF the word is greater than 4 in length, reverse it
Return a string where the letters of the individual words are
changed if the condition is met.

Algorithm:
 - split the string into words
 - iterate of the array, checking length of indexs
 - if length is 4 or less, leave it
 - if length is 5 or greater, reverse it
 - rejoin the array into a string and return it
*/

function reverseWords(string) {
  let array = string.split(' ');

  array = array.map(word => {
    if (word.length < 5) return word;
    return word.split('').reverse().join('');
  });
  console.log(array.join(' '));
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"