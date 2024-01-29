/*
Write a function that computes the difference between the
square of the sum of the first count positive integers and
the sum of the squares of the first count positive integers.

P/E:

Input: An integer
Output: A new integer representing the difference of
the square of sums and the sum of squares

Rules:
- Take and return an integer
- Increment and sum the numbers counting up to the given integer
- Increment and sum the squares of the numbers counting up to the given
integer


DS: Numbers!

A:
- Increment up and to the target number,
summing the square of sums and the sum of squares
- store the square of sums, and sum of squares
- Return the Difference of the two
*/

function sumSquareDifference(int) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let count = 1; count <= int; count++) {
    sum += count;
    sumOfSquares += Math.pow(count, 2);
  }

  let result = Math.pow(sum, 2) - sumOfSquares;
  console.log(result);
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150