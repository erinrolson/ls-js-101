// import readline-sync library
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function executeAgain() {
  prompt('Do you want to calculate again? Enter: y or yes');
  let run = readline.question();
  run = run.toUpperCase();
  switch (run) {
    case 'Y':
    case 'YES':
      return true;
    default: return false;
  }
}

do {
  // greet user
  prompt('Hello, User! Welcome to the Calculator!');
  
  // get first number from user
  prompt('Provide first number:');
  let num1 = readline.question();
  
  while (invalidNumber(num1)) {
    prompt('Provide a VALID first number:');
    num1 = readline.question();
  }
  Number(num1);
  
  
  // get second number from user
  prompt('Provide the second number:');
  let num2 = readline.question();
  
  while (invalidNumber(num2)) {
    prompt('Provide a VALID second number:');
    num2 = readline.question();
  }
  Number(num2);
  
  // get operation from user
  prompt('What operation?\n1) Add 2) Subtract 3) Multiply 4) Divide');
  let operator = readline.question();
  
  while (!['1', '2', '3', '4'].includes(operator)) {
    prompt('Provide a VALID operator number:');
    operator = readline.question();
  }
  
  // perform correct operation for user
  let result;
  
  switch (operator) {
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
} while (executeAgain());