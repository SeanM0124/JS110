/*
Write a function that rotates an array by moving the first element to
the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.

P/E:

Rules:

- Do not modify the original array.
- If it is not an array, return undefined
- if it is an empty array, return an empty array
- Move first element to the end.

Input: Ideally its an array
Output: Either Undefined, an empty array or the passed array with the
element originally at index 0 pushed onto the end.

DS: Array

A:
Create array with main logic path:
 - Init a new result array
 - Perfrom input validation
  - If is not an array, return undefiend
  - If it is an empty array, return an empty array
 - Cache the value of the arrays first element
 - Copy all elements except the first of the input array to the result array
 - Add cached first element to the end of the result array
 - return the result array

*/

// function isArray(input) {
//   return Array.isArray(input);
// }

function rotateArray(input) {
  if (!Array.isArray(input)) return undefined;
  if (input.length === 0) return [];

  return input.slice(1).concat(input[0]);
}


rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]


/*
Input: An array
Ouput: A Copy of the input array with the first element moved to the end

rules:
return undefined if the argument is not an array.
the input array is not mutated
if empty array, return empty array
return copt of array with first element move to the end

Algorithm:
I need to create a copy of the input array, then shift the first element
then push it back on, then return it
*/

// function rotateArray(array) {
//   if (!Array.isArray(array)) {
//     return undefined;
//   }
//   if (array.length === 0) {
//     return [];
//   }

//   let newArray = array.slice();
//   let movedElement = newArray.shift();
//   newArray.push(movedElement);
//   console.log(newArray);
//   return newArray;
// }


// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]
// rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
// rotateArray([]);                       // []

// // return `undefined` if the argument is not an array
// // rotateArray();                         // undefined
// // rotateArray(1);                        // undefined


// // the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// console.log(array);                                 // [1, 2, 3, 4]

/*
function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }
  if (array.length === 0) {
    return [];
  }
  return array.slice(1).concat(array[0]);
}
*/