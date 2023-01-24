const readline = require("readline-sync");

// question the user for a bill amount
let billTotal = parseFloat(readline.question('What was your bill total?\n'));

//prompt for a tip rate
let tipPercentage = (parseFloat(readline.question('What % would you like to tip?\n')) 
                    / 100);
let tipTotal = billTotal * tipPercentage;

//compute the tip (to console)
console.log(`Your total tip amount is $${tipTotal.toFixed(2)}`);

// compute total amount of bill (to console)
console.log(`Your total bill amount is $${(billTotal + tipTotal).toFixed(2)}`);