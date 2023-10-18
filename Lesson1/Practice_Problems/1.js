//What is the return value of the filter method call below? Why?

[1, 2, 3].filter(num => 'hi');

/*
Filter does selection relative to the truthiness of the callback function.
Since 'hi' is evaluated as a truthy value, [1, 2, 3] is returned.
*/


