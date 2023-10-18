//What is the return value of map in the following code? Why?
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});
/*
map will create a new array consisting of the
return values from the callbacl function.

['bear'];
[ undefined, 'bear' ]

When a function doesnt explicitly return something, it returns undefined
*/