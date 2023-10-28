let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

/*
Action--------performedOn---- sideEffect---return----returnUsed
var declaration-n/a--none--undefined--no
forEach--outer array--none-undefined--yes used to assign myArr
Outer callback--sub arrays-none--array of undefined--no
map--each sub array--none-- array of undefined- yes returned to outer callback
inner callback--sub array elem--none--undefined--yes, used by map
compariso--num > 5(elem in sub array)--none--a boolean--yes evaluated by if
consol.log--num(elem in sub array)--outputs a string rep of num--undefined--yes
used by inner callback

output:
18
7
12
undefined
*/