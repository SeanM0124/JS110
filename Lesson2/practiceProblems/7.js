//Given the following code, what will the final values of a and b be?
//Try to answer without running the code.
//
let a = 2;
let b = [5, 8];
let arr = [a, b]; //[2, [5, 8]]

arr[0] += 2; //[4, [5, 8]]
arr[1][0] -= a; ////[2, [3, 8]]

//a is still 2 as its assigned a primitive
//b becomes [3, 8]

