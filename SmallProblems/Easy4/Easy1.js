//Write a program that solicits six numbers from the user
//and logs a message that describes whether the sixth number
//appears among the first five numbers.

let readline = require('readline-sync');

let numbers = [];

while (numbers.length < 5) {
  numbers.push(readline.question('Please enter a number: '));
}

let lastNum = readline.question('Enter your last number.');

if (numbers.includes(lastNum)) {
  console.log(`The number ${lastNum} does appear in ${numbers}`);
} else {
  console.log(`The number ${lastNum} does not appear in ${numbers}`);
}
