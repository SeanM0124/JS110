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

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }
  if (array.length === 0) {
    return [];
  }

  let newArray = array.slice();
  let movedElement = newArray.shift();
  newArray.push(movedElement);
  console.log(newArray);
  return newArray;
}


rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
// rotateArray();                         // undefined
// rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

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