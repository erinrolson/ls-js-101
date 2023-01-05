// import readline-sync library
const readline = require('readline-sync');

// greet user
console.log('Hello, User! Welcome to the Calculator.');

// get first number from user
let num1 = Number(readline.question('Provide first number.\n'));

// get second number from user
let num2 = Number(readline.question('Provide second number.\n'));

// get operation from user
let operator = readline.question('What operation?\n1) Add 2) Subtract 3) Multiply 4) Divide\n');

// perform correct operation for user
let result;

if (operator === '1') {
 result = num1 + num2;
} else if (operator === '2') {
  result = num1 - num2;
} else if (operator === '3') {
  result = num1 * num2;
} else if (operator === '4') {
  result = num1 / num2;
}
// display result
console.log(`The result is: ${result}`);