/*
Write a function that takes an array as an arugment
and reverses its elements in place. That is,
mutate the array passed into this method.
the return value should be the same array object.

Input: an array
Output: the array mutated and reversed

Rules: Cannot use built in reverse method.
must return the same array
reverse the elements in place

Algorithm:
 - iterate over the array
*/


function reverse(array) {
  for (let index = 0; index < array.length / 2; index++) {
    let char = array[index];
    array[index] = array[array.length - 1 - index];
    array[array.length - 1 - index] = char;
  }
  return array;
}


let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
