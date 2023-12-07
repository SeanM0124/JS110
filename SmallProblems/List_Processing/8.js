/*
Write a function that takes a grocery list in a two-dimensional
array and returns a one-dimensional array. Each element in the grocery
list contains a fruit name and a number that represents the desired
quantity of that fruit. The output array is such that each fruit name
appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas.
Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

I need to analysze each inner array, caching the count and pushing the item that
amount of times, then iterate to the next inner array.

P:
Input: 2 layer Array with inner array containing item, count
Output: 1 Layer array -> item item item, item2 item2 ...

Explicit:
- return an array
- populate array with the item/fruit, based on the count from the input array

Implicit:

DS: Arrays

A:
Declare and init a result array to eventually return

Iterate through the input array, cache the fruit and the count
add the fruit to the result array, until the amount added is equal to the count
continue iterating until all fruits and its count are added to the result
return the new array.

*/


function buyFruit(arr) {
  let result = [];

  for (let length = 0; length < arr.length; length++) {
    let fruit = arr[length][0];
    let count = arr[length][1];

    for (let num = 0; num < count; num++) {
      result.push(fruit);
    }
  }
  console.log(result);
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]