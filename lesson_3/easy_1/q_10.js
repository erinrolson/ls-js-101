// prompt: Return a new version of this sentence that ends just before the word house
let advice = "Few things in life are as important as house training your pet dinosaur.";
let newAdvice = advice.split('house')[0];

console.log(newAdvice);

// Expected return value:
// => 'Few things in life are as important as '