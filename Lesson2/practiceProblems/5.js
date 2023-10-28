//Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};
let details = Object.values(munsters);
let totalMaleAge = 0;

details.forEach(member => {
  if (member.gender === 'male') {
    totalMaleAge += member.age;
  }
});

console.log(totalMaleAge);