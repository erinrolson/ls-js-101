/*
Problem:
Inputs
- two positive integers from the user

Outputs:
- formatted strings of the following operations
  - addition, subtraction, multiplication, division, remainder, powers
Rules:
- must prompt user for two integers
- must perform operations on those values and return results to user

Examples & Test Cases
1) look at examples and check understanding
2) any implicit rules?

Data Structure

Algorithm

Code!
*/

const readline = require("readline-sync");

function prompt(str){
  console.log(`==> ${str}`);
}

function displayOperation(operator){
  return `${num1} ${operator} ${num2} =`;
}

prompt('Enter the frist number');
let num1 = Number(readline.question());

prompt('Enter the second number');
let num2 = Number(readline.question());

console.log(displayOperation('+'), num1 + num2);
console.log(displayOperation('-'), num1 - num2);
console.log(displayOperation('*'), num1 * num2);
console.log(displayOperation('/'), Math.round(num1 / num2));
console.log(displayOperation('%'), num1 % num2);
console.log(displayOperation('**'), num1 ** num2);