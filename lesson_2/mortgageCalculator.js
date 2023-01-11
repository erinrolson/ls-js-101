/*
Try using PEDA -> C for the problem:
Prompt: Build a mortgage calculator

Step 1) Understand the [P]roblem
=================================
What are the inputs?
- total loan amount
- APR
- loan duration

What are the outputs?
- log monthly payment amt formatted as dollar/cents amount (two decimals)

What are the rules?
- use semantic variable names
- must log payment amount in proper currency format w/ two decimal places
- code must be checked with ESLint

Step 2) [E]xamples and Test Cases
==================================
Hint 1: Look at examples & test cases to confirm understanding of problem.
 - the example we are given is an already-made loan calculator on the internet.
    - loan amount
      * should be in dollars
      * accepts only positive values
      * decimals are fine, but values will be rounded to hundreds place
    - Loan duration
      * month values only allowed
      * must be integer, No decimals allowed
    - APR
      * always compounds monthly
      * expected value is interest rate as a percentage
Hint 2: Identify implicit requirements not explicitly stated in requirements.

----- INTERMISSION -----
Do I have a mental model for this problem?
Do I know what I have to do to get from input to output?
 - get inputs from user -> validate inputs -> use in equation -> log value

[D]ata structure
=================
Object / Array
Does my data have labels?
Yes! Could use an object to store values as key:value pairs?

[A]lgorithm **this is essentially the pseudocode step
================
Hint 1) You should be writing, in plain english, the logic of how to implement
your solution.
  a) this should be specific enough to outline exact steps you're going to take
  b) BUT it shouldn't be specific enough to name methods and syntax.
     Should be "code agnostic".

  - prompt the user for input values
  - validate input values (see above)
  - convert input annual interest rate
    - multiply by 100 to convert from %
      - convert to monthly rate (annual rate / 12)
  - convert years to months
  - create a loan object to store all equation information
  - solve for M (monthly loan payment)
  - make sure to assign key : value pairs to loan object
  - log monthly loan payment to user in dollar/cent format
*/
const readline = require("readline-sync");
const messageConfig = require("./loanMessages.json");

function prompt(message) {
  console.log(`==> ${message}`);
}

function invalidNumber(number) {
  return [-1, 0, -0, NaN].includes(Math.sign(number)) || 
         number.trimStart() === '';
}

function executeAgain() {
  prompt(messageConfig.execute);
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
  console.clear();
  
  prompt(messageConfig.greet);
  prompt(messageConfig.description);
  
  // create a loan object
  const loan = {};
  
  prompt(messageConfig.loanTotal);
  let totalBorrowed = readline.question();
  
  //validate total loan value input by user
  while (invalidNumber(totalBorrowed)) {
    prompt(messageConfig.invalidNumber);
    totalBorrowed = readline.question();
  }
  
  loan["totalBorrowed"] = Number(totalBorrowed);
  
  prompt(messageConfig.termMonths);
  let termMonths = readline.question();
  
  //dont allow users to provide moths as a decimal...
  
  while (invalidNumber(termMonths) || (termMonths % 1) > 0) {
    prompt(messageConfig.invalidNumber);
    termMonths = readline.question();
  }
  
  loan["termMonths"] = Number(termMonths);
  
  prompt(messageConfig.annualPercentageRate);
  let apr = readline.question();
  
  while (invalidNumber(apr)) {
    prompt(messageConfig.annualPercentageRateInvalid);
    apr = readline.question();
  }
  let monthlyRate = (Number(apr) / 100) / 12;
  loan["monthlyRate"] = monthlyRate;
  
  loan["monthlyPayment"] = loan.totalBorrowed * (loan.monthlyRate / (1 - Math.pow((1 + loan.monthlyRate), (-loan.termMonths))));
  loan["interestPaid"] = (loan.monthlyPayment.toFixed(2) * loan.termMonths) - loan.totalBorrowed;
  
  prompt(`${messageConfig.result} $${loan.monthlyPayment.toFixed(2)}`);
  prompt(`${messageConfig.interestPaid} $${loan.interestPaid.toFixed(2)}`);
} while (executeAgain());