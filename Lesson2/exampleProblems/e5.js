[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});

/*
Action--------performedOn---- sideEffect---return----returnUsed
map--outer array---none---a new array---no
outer callback---each sub array--none--a new array--yes by outer map
inner map---sub array--none--a new array--- yes by the outer callback
inner callback--sub array--none---number---yes by inner map
num * 2--value of num--none--number--returned to inner callback

what is final return value? : a new array [[2,4],[6,8]]
*/
