// import readline-sync library
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

// greet user
prompt('Hello, User! Welcome to the Calculator!');

// get first number from user
prompt('Provide first number:');
let num1 = Number(readline.question());

// get second number from user
prompt('Provide the second number:');
let num2 = Number(readline.question());

// get operation from user
prompt('What operation?\n1) Add 2) Subtract 3) Multiply 4) Divide\n');
let operator = readline.question();

// perform correct operation for user
let result;

switch(operator){
  case '1':
    result = num1 + num2;
    break;
  case '2':
    result = num1 - num2;
    break;
  case '3':
    result = num1 * num2;
    break;
  case '4':
    result = num1 / num2;
    break;
}
// display result
prompt(`The result is: ${result}`);