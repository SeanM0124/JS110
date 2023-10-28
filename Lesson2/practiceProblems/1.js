//How would you order the following array of
//number strings by descending numeric value (largest number value to smallest)?

let arr = ['10', '11', '9', '7', '8'];
arr.sort((a, b) => Number(b) - Number(a));
console.log(arr);

//using the sort method, and passing it arguments to do a comparison
//reverse order, b - a, forward order a - b