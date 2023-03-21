// consider the following nested object
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// compute and display the sum of male members of the family
let maleAgeSum = 0;

for (let individual in munsters) {
  if (munsters[individual]['gender'] === 'male' ) {
    maleAgeSum += munsters[individual]['age'];
  }
}

console.log(maleAgeSum);