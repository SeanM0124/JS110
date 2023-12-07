/*
Wrtie a function that takes an integer and covnerts
it to a strign version. If the number is less than or greater than 0,
include the proper sign (+ or -).

Rules:
cannot use built in methods
If it is a positive number prepend +
If it is a negative numner append -
If it is a 0, add no sign
return the string version of a number
*/

function signedIntegerToString(num) {
  if (num < 0) {
    return integerToString(num);
  } else if (num > 0) {
    return '+' + integerToString(num);
  } else {
    return '0';
  }
}
function integerToString(num) {
  let result = '';
  return result + num;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");