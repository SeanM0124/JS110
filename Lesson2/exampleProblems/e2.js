
[[1, 2], [3, 4]].map(arr => console.log(arr[0]));
// 1
// 3
// => [undefined, undefined]

/*
Action--------performedOn---- sideEffect---return----returnUsed?
map---Outer Array--none---a new array---no but shown on line 21
callback--inner array---none----undefined---its used by map to make a new array
elementRef---inner array---none---element at [0]---yes, used by console.log
console.log--elementref---prints string of [0]---undefiend--yes used by callnack
*/