//What is the return value of map in the following code? Why?

[1, 2, 3].map(num => {
  num * num;
});

/*
since there is no explicit return value given, map will return undefined,
ultimately returning an array of [undefined, undefined, undefined]

"map looks at the return value of the callback function to decide
the elements in the returned array. Each element in the original
array is replaced by what the callback returns for that element."


*/