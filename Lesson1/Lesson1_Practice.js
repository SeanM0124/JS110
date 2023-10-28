// /*
// forEach is the built in method for ITERATING OVER ARRAYS. It is functionally
// equivalent to a for or while loop.

// forEach is the built in method for iterating over arrays

// it takes a function as an argument
// */

// function logNumbers(number, index) {
//   console.log(`${index}: `, number * 2);
// }

// function logLetters(letter, index) {
//   console.log(letter, index);
// }

// function logValues(value) {
//   console.log(value);
// }

// let numbers = [1, 2, 3, 4, 5];
// let letters = 'abcdasdofooqiweorispigapsf';
// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// numbers.forEach(logNumbers);
// letters.split('').forEach(logLetters);

// Object.values(produce).forEach(logValues);

// Object.values(produce).forEach(value => {
//   console.log(value);
// });

// letters.split('').forEach((letter, index) => {
//   console.log(letter, index);
// });

// numbers.forEach((number, index) => {
//   console.log(number, index);
// });

// Object.keys(produce).forEach(key => {
//   console.log(key);
// });

// Object.entries(produce).forEach(entry => {
//   console.log(entry.join(' is a '));
// });

// Object.entries(produce).forEach(entry => {
//   let [ key, value ] = entry;
//   console.log(`${key} is a ${value}`);
// });


/*
filter is used to select certain elements from an array, filter examines the
return value of the callback on each iteration. truthy of falsy
when working with filter you must pay attention to the callbacks return value

*/

// let oddNums = numbers.filter(num => {
//   return num % 2 === 1;
// });

// // let oddNums = numbers.filter(num => num % 2 === 1);


// console.log(oddNums);

// let onlyVegies = Object.entries(produce).filter(entry => {
//   let [key, value ] = entry;
//   return value === 'Vegetable';
// });

// console.log(onlyVegies);
// let onlyVeg = {};
// onlyVegies.forEach(entry => {
//   let [ key, value ] = entry;
//   onlyVeg[key] = value;
// });

// console.log(onlyVeg);


/*
Map also considers the callback, the main difference however
is map uses the return value to perform transformation instead of selection
[1, 2, 3].map(num => num * 2); -> the return value of hte callback is the
the product of num and 2. Map takes the return value and places
it into an new array.


*/

// let newNum = numbers.map(num => num * 2);
// console.log(newNum);
// console.log(numbers);

// let checkNum = numbers.map(num => num % 2 === 1);
// console.log(checkNum);

// let vowels = letters.split('').filter(char =>
// 'aeiou'.includes(char.toLowerCase())).join('');
// console.log(vowels);

// let blur = letters.split('').map(char => char + char).join('');
// console.log(blur);


/*
Some asks "are there some,
or atleast one of the values, that return a truthy value?"
it returns truthy if atleats one return value of the callback i truthy.
short circuit?
*/
// console.log(numbers.some(num => num === 0));

// console.log(Object.keys(produce).some(item => item.length > 4));

/*
The every method is similar to some, but will only return true
if every return value
of each element that passes through the callback function is a truthy value.
*/

/*
The find method also takes a callback function as an argument and returns the
first element that returns a truthy value in the callback function
*/

// console.log(numbers.find(number => number % 2 === 0));
// console.log(letters.split('').find(letter => letter > 'm'));
// console.log(Object.keys(produce).find((key => key === 'Fruit'));

/*
findIndex returns the index of the first element that the callback returns a
truthy value for
*/

// console.log(numbers.findIndex(number => number > 4.1));
// console.log(letters.split('').findIndex(letter => letter === 'p'));
// console.log(Object.entries(produce).findIndex(item => item[0] === 'pear'));

/*
Reverse revereses, go figure. Reverse mutates the originial array.
*/

// console.log(numbers.slice().reverse());
// console.log(numbers);

/*
includes checks whether the passed array holds a certain value, and returns
a boolean.
*/

// console.log(numbers.includes(1));
// console.log(letters.split('').includes('z'));


//What is the return value of the filter method call below? Why?

// console.log([1, 2, 3].filter(num => 'hi')); //-> [1, 2, 3]
//filter creates a new array of the values in the passed array that
//return a truthy value in the callback function.
//thecallback funtion has the implicit truthy value since its callback is simply
//a string, and non-empty strings will evaluate as truthy

//What is the return value of map in the following code? Why?

// let test = [1, 2, 3].map(num => {
//   num * num;
// });

// console.log(test);

/*
There is no explicit or implicit return value so it will return a new array
with undefined as each element.
*/


//The following code differs slightly from the above code.
//What is the return value of map in this case? Why?
// console.log([1, 2, 3].map(num => num * num));

//this one has an implicit return since it is a one line arrow function
//it will return [1, 4, 9] as map returns a new array populated with the result
//of the callback function

//What is the return value of the following statement? Why?

// ['ant', 'bear', 'caterpillar'].pop().length;

// this will return the length of caterpiller
//due to the method chain order -> pop will remove the last element
//being 'caterpiller' and return it, and the length is called on it,
//returning 11

//What is the callback's return value in the following code?
//Also, what is the return value of every in this code?

// [1, 2, 3].every(num => {
//   return num = num * 2;
// });

// the return value of the callback will be 2, 4, 6 respectively, but every
//will return true as non negative integers evaluate as truthy

//How does Array.prototype.fill work? Is it destructive? How can we find out?

// let arr = [1, 2, 3, 4, 5]
// console.log(arr);
// arr.fill(1, 1, 5); //arr.fill(value, start, end)
// console.log(arr); // -> [1,1,1,1,1]
//fill is destructive, it will modify the array.

//What is the return value of map in the following code? Why?

// ['ant', 'bear'].map(elem => {
//   if (elem.length > 3) {
//     return elem;
//   }
// });

//Map creates and returns a new array containing the elements that pass
//the call backs function. ant will not pass the callback function so it
//will not be added to the new array, but map will return [undefined, bear]
//

//Write a program that uses this array to create an object where the names
//are the keys and the values are the positions in the array:

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// let flintObj = {};

// // for (let index = 0; index < flintstones.length; index++) {
// //   flintObj[flintstones[index]] = index;
// // }

// flintstones.forEach((name, index) => {
//   flintObj[name] = index;
// });

// console.log(flintObj);
// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
//


//Add up all of the ages from the Munster family object:

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let total = 0;

// Object.values(ages).forEach(num => {
//   total += num;
// });

// console.log(total);

//Pick out the minimum age from our current Munster family object:

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let array = Object.values(ages);
// let min = array[0];

// for (let index = 0; index < array.length; index++) {
//   if (array[index] < min) {
//     min = array[index];
//   }
// }
// console.log(min);

// //solution:
// let agesArr = Object.values(ages);
// Math.min(...agesArr); // => 10

// let mini = Math.min(...(Object.values(ages)));
// console.log(mini);

//Create an object that expresses the frequency
//with which each letter occurs in this string:

// let statement = "The Flintstones Rock";
// let letters = {};
// let arr = statement.split('').filter(char => char !== ' ');

// for (let index = 0; index < arr.length; index++) {
//   letters[index] = letters[index] || 0;
//   letters[index] += 1;
// }
// console.log(letters);

// let cat = 'Butter';
// console.log(cat[cat.length - 2]);
//Javascript returns undefiend when you try to aceess a character with
//a negative integer.

//
