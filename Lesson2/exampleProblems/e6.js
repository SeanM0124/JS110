let test = [{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});
console.log(test);

// => [ { c: 'cat', d: 'dog' } ]

/*
Action--------performedOn---- sideEffect---return----returnUsed
filter--an array of objects--none--a new array of objects--no but shown on 90
outer callback--a keyvalue pair--none--true or false---yes by filter
object.keys--on an object--none--returns an array-yes by every
every---each key---none--true or false--yes, by the outer callback
innercallback--an object key---none--boolean--yes, by every
element ref--char of a string--none--a character--yes by callback


*/