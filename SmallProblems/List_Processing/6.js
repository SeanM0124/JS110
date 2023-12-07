/*
Write a function that returns a list of all palindromic substrings
of a string. That is, each substring must consist of a sequence of
characters that reads the same forward and backward. The substrings
in the returned list should be sorted by their order of appearance
in the input string. Duplicate substrings should be included
multiple times.

You may (and should) use the substrings function you wrote in the
previous exercise.

For the purpose of this exercise, you should consider all
characters and pay attention to case; that is, 'AbcbA' is a
palindrome, but 'Abcba' and 'Abc-bA' are not. In addition,
assume that single characters are not palindromes.

I think that this problem is pretty simple. You just need to integrate the
substring functions with the palindrome one, and populate an array with the
substrings that pass true to be palindromes.

*/

function palindromes(string) {
  let substrings = getSubstrings(string);
  let palindromes = substrings.filter(isPalindrome);
  console.log(palindromes);
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function getSubstrings(string) {
  let substringArr = [];

  for (let index = 0; index < string.length; index++) {
    let substring = string.substring(index);
    substringArr = substringArr.concat(leadingSubstrings(substring));
  }
  return substringArr;
}

function leadingSubstrings(string) {
  let substringsArr = [];

  for (let length = 0; length < string.length; length++) {
    substringsArr.push(string.slice(0, length + 1));
  }
  return substringsArr;
}


palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]