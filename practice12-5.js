// Two words are anagrams of each other if they both contain the same letters.

// Write a function that will find all the anagrams of a word from a list.
// You will be given two inputs, a word and an array with words.
// You should return an array of all the anagrams or an empty array if
//there are none.

/*
P/E:
- Input: One word and an array of words
- Output: The anagrams of the first word passed

Rules:
 - Return an array of anagrams or an empty array
 - Two words that contain the same letters are anagrams of eachother
 - always have lowercase

DS: Strings -> Arrays

A:
- Init a result array
- Sort and cache the passed word lexicographically
- Iterate over the array of words
 - Sort each word as I analyze it, lexicographically
  - split, sort, join
 - Compare to the first word passed strictly
  - If its match:
   - Push to result array
   - Otherwise skip
Return the result array.
*/

function anagrams(word, array) {
  let sortWord = word.split('').sort().join('');
  let result = [];
  array.forEach(words => {
    if (words.split('').sort().join('') === sortWord) {
      result.push(word);
    }
  });
  return result;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// ['carer', 'racer']

console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));
// []