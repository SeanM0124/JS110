//What's happening in this seemingly-simple piece of
//code? Take it apart and try to describe every
//interaction with precision.
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
// 1
// 3
// => undefined

/*
Action--------performedOn---- sideEffect---return----returnUsed?
forEach----Outer array------none---undefined--no, just shown
callback---Inner array------none----undefined---no
elementReference [0]---inner array---none----element at [0]--yes by console.log
console.log---each element [0]----undefined---yes to determine callback return
*/
