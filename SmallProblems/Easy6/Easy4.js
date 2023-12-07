/*
Write a function that takes an integer argument and returns
an array containing all integers between 1 and the argument,(inckusive)
in ascending order

input: a num
output: an array

rules:
argument is always positive.
ascending order
array contains all integers from 1 to the argument

start a loop from the start and to the argument
*/

function sequence(num) {
  let array = [];
  for (let index = 1; index <= num; ++index) {
    array.push(index);
  }
  console.log(array);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]