/*
A featured number (something unique to this exercise) is an odd number that is a
multiple of 7, with all of its digits occurring exactly once each.
For example, 49 is a featured number, but 98 is not (it is not odd),
97 is not (it is not a multiple of 7), and 133 is not
(the digit 3 appears twice).

Write a function that takes an integer as an argument and
returns the next featured number greater than the integer.
Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.


P/E:

Input: an integer
Output: The next featured number that occurs after the input integer

Rules:
A Featured number must:
 - Be a multiple of 7,
 - Each unique digit can only occur once
 - Must be odd
 - Largest possible featured number is 9876543201

DS: For loop, maybe convert number to string to iterate over it

A:
 - If >= largest possible - break;
 - Increment by 1 from the given number
  - check if its a multiple of 7 each iteration and is odd.
  - If it is:
   - convert to string to iterate over
   - If temp array does not include the number, push number to it
   - if temp array does innclude number, then it has double appearance,
*/

const largestPossible = 9876543201;

function featured(int) {
  if (int >= largestPossible) return 'There is no possible number that fulfills those requirements.';
  let result;
  for (let count = int; count <= largestPossible; count++) {
    if (count % 7 === 0 && count % 2 === 1) {
      let stringNum = String(count);
      let tempArr = [];
      for (let index = 0; index < stringNum.length; index++) {
        if (!tempArr.includes(stringNum[index])) {
          tempArr.push(stringNum[index]);
        } else {
          break;
        }
      }
      if (tempArr.length === stringNum.length) result = tempArr;
    }
  }
  console.log(result);
}


featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."