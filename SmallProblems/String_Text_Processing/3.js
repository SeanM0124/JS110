/*
Write a function that takes a string and returns an object
containing three properties: one representing the
number of characters in the string that are lowercase letters,
one representing the number of characters that are uppercase letters,
and one representing the number of characters that are neither.

P/E

input: A string
output: an object -> three properties:
1. one representing number of characters in the string that are lowercase
2. one representing the number of characters that are uppercase letters
3. one representing characters that are not letters

Key : Value
lowercase: count

Rules:
- Anything that isnt a letter goes to the neither property counts
- Case sensitive
- spaces go to neither catagory

DS: Strings -> Object

A:
- Create an object to cache the results
- Iterate over each character
 - Is it a lower case letter?
 - Is it an uppercase letter?
 - Else its neither.
- Increment the correct count

return updated object
*/

function letterCaseCount(string) {
  let counts = {lowercase: 0, uppercase: 0, neither: 0};

  for (let index = 0; index < string.length; index++) {
    let char = string[index];
    if ((char >= 'a') && (char <= 'z')) {
      counts.lowercase += 1;
    } else if ((char >= 'A') && (char <= 'Z')) {
      counts.uppercase += 1;
    } else {
      counts.neither += 1;
    }
  }
  console.log(counts);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }