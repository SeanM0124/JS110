/*
Write a function that takes two arguments, an inventory item ID and a
list of transactions, and returns an array containing only the transactions
for the specified inventory item.


P/E:


 I: An Array of Objects
 O: An array of Selected Objects

 Rules:

  Implicit:
  - function takes two arguements: ID and the a list of transactions
  - return a list of the transactions realted to the specific ID

  Explicit:
  -

DS: Arrays/Objects

A:
- Create a destination array to return
- Iterate through the given list, checking if the IDs match
 - If they do, push it to the destination array, else continue
- After iterating all options, return the destination array.

*/

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

// function transactionsFor(actionID, list) {
//   let result = [];

//   for (let index = 0; index < list.length; index++) {
//     if (list[index].id === actionID) {
//       result.push(list[index]);
//     }
//   }
//   console.log(result);
// }

function transactionsFor(invItem, list) {
  return list.filter(inventory => inventory.id === invItem);
}

transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]