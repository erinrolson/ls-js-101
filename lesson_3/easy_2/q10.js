// Prompt: write a one line expression to count the number of 't's in the strings
//probably a global regex object?
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter(element => element ==='t').length);
console.log(statement2.split('').filter(element => element ==='t').length);