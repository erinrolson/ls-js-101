/*
still working on this
*/

const readline = require("readline-sync");

// function to sum the number
function computeSum(num) {
  let sum = 0;
  for (let i = num; i > 0; i -= 1){
    sum += i;
  }
  return sum;
} 

// function to multiply the number
function computeProduct(num){
  let product = 1;
  for (let i = num; i > 0; i -= 1){
    product *= i;
  }
  return product;
}

// prompt the user for a number greater than zero
let number = parseInt(readline.question('Enter an integer greater than 0:\n'));

//do you want the sum or product of all numbers btw 1 & input number?
let sumNumber = (readline.question('Do you want the sum or product?\n') === 'sum') ?
                true : false;

//calculate and return based on user selection
if (sumNumber) {
  // sum the numbers
  console.log(`The sum of the integers between 1 and ${number} is ${computeSum(number)}`);
} else {
  // multiply numbers
  console.log(`The product of the integers between 1 and ${number} is ${computeProduct(number)}`);
}
