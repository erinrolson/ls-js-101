const readline = require("readline-sync");

let age = Math.floor(Number(readline.question("What is your age?\n")));
let retireAge = Math.floor(Number(readline.question("When would you like to retire?\n")));

// create a date object
let today = new Date();
let currentYear = today.getFullYear();

console.log(`It is currently ${currentYear}. You will retire in ${currentYear + (retireAge - age)}.`)
console.log(`You only have ${(retireAge - age)} year(s) to go!`);

