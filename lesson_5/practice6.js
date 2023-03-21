// Given this previously seen family object, print the name, age, and gender of each family member:

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// Each output line should follow this pattern
// (Name) is a (age)-year-old (male or female).

Object.entries(munsters).forEach( (element) => {
  let name = element[0][0].toUpperCase() + element[0].slice(1);
  console.log(`${name} is a ${element[1]['age']}-year-old ${element[1]['gender']}.`);
});