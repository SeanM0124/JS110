//How does Array.prototype.fill work?
//Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5];
console.log(arr);

arr.fill(1, 1, 5);
/*
Fill will replace all values in indices 1-5 with the value 1.
It is destructive, it will return the modified array.
*/

console.log(arr);
