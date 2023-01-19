// Prompt: Given a string, return a new string that replaces every occurece of 
// the word 'important' with 'urgent'

let advice = "Few things in life are as important as house training your pet dinosaur. important.";
const regex = /important/g;
let newAdvice = advice.replace(regex, 'urgent');

console.log(advice);
console.log(newAdvice);