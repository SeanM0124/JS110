//What is the callback's return value in the following code?
//Also, what is the return value of `every` in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});


/*
The callbacks return value is 2, 4, 6 as it executes.
The value of every is true, since all values are truthy
*/