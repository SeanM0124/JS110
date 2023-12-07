/*
Write a function that takes a string as an argument and returns that
string with every lowercase letter changed to uppercase and every
uppercase letter changed to lowercase. Leave all other characters unchanged.


P/E:

I: string
O: a new string

Rules:
- If upper case, make it lower case
- if lowercase, make it uppercase
- else leave it unchanged.

DS: String(s)

A:
- Iterate over the string, passing each character through a logic series
 - Is it  a letter?
  - is it uppercase?
   - make it lowercase
  - is it lower case?
   - make it uppercase
  - its not a letter?
   - keep it unchanged
- return the new string

*/

function swapCase(string) {
  let result = string.split('').map(char => {
    if ((char >= 'a') && (char <= 'z')) {
      return char.toUpperCase();
    } else if ((char >= 'A') && (char <= 'Z')) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
  console.log(result);
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"