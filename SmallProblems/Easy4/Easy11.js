/*
Write a function that converts a non-negative integer value
to a string representation of that integer

input: a Number
output: a string version of input nunber

Rules:
Cannot use built in methods
Numbers will not be negative
Numbers can be of largely varying length
string will only contain digits

A:
digit by digit i need to convert it to a number and add
to a final result.


How to convert a number to a string? use implicit
concatenation of the + operator.
*/

function integerToString(num) {
  let result = '';
  return result + num;
}

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"