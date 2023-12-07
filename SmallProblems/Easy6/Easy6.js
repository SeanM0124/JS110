/*
Write a function that takes two integers as arguments.
The first argument is a count, and the second is the starting number
of a sequence that the function makes. The function should return
an array containing the same number of elements
as the count argument. The value of each element should be a multiple of
the starting number
*/

function sequence(count, num) {
  let array = [];
  for (let index = 1; index <= count; index++) {
    array.push(num * index);
  }
  console.log(array);
}


sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []