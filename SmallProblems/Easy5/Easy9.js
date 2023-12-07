/*
Write a function that counts the number of occurences
of each element in a given array. Once counted, log each element
alongside the number of occurences. Consider the words case sensitive.

Input: an array of elements
Output element and its occurences

Data structure: Object seems good here and i need hte practice

Explicit Rules:
 - Words are case sensitive
 - log the element and its occurences

Algorithm: Iteratre through the array, making key-value pairs as it goes
the key is the element, the value is the count. Finally, log the pairs
after fully counting through the array

*/

function countOccurrences(array) {
  let count = {};

  array.forEach(elem => {
    count[elem] = count[elem] || 0;
    count[elem] += 1;
  });
  for (let word in count) {
    console.log(`${word} => ${count[word]}`);
  }
}


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1