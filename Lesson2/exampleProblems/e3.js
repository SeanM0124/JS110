[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

/*
Action--------performedOn---- sideEffect---return----returnUsed?
map---outer array--none---a new array---no
callback---sub arrays--none--elements at arr[0]---map uses
elemRef--eeach subarray--none---elements at arr[0]---console.log
console.log--elements at [0]---prints [0]--undefined---no
elemRef--each sub array---none---elements at [0]--yes, used by callback
*/