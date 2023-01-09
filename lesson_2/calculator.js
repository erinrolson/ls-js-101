// import readline-sync library
const readline = require('readline-sync');

//load json file
const JSON = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function executeAgain() {
  prompt(JSON.execute);
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
  prompt(JSON.greet);
  
  // get first number from user
  prompt(JSON.firstNum);
  let num1 = readline.question();
  
  while (invalidNumber(num1)) {
    prompt(JSON.firstNumInvalid);
    num1 = readline.question();
  }
  Number(num1);
  
  
  // get second number from user
  prompt(JSON.secondNum);
  let num2 = readline.question();
  
  while (invalidNumber(num2)) {
    prompt(JSON.secondNumInvalid);
    num2 = readline.question();
  }
  Number(num2);
  
  // get operation from user
  prompt(JSON.operator);
  let operator = readline.question();
  
  while (!['1', '2', '3', '4'].includes(operator)) {
    prompt(JSON.operatorInvalid);
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
  prompt(`${JSON.result} ${result}`);
} while (executeAgain());