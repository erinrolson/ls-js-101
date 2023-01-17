// Prompt: Determine whether the following object of people and their age contains
// an entry for 'Spot'
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 }

console.log('Spot' in ages); // will check if a property is in an obj or its prototype chain
console.log(ages.hasOwnProperty('Spot'));