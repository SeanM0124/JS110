//The following code differs slightly from the above code.
//What is the return value of map in this case? Why?

[1, 2, 3].map(num => num * num);

/*
The return value here is [1, 4, 9].
When the callback (arrow notation) is on one line, it has implicit return.
It will return the outcome of num * num in this case.
*/
