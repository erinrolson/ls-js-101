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
  console.log(`\n==> ${message}`);
}

function greetUser() {
  prompt(messageConfig.greet);
  prompt(messageConfig.description);
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

function displayResults(loanObj) {
  console.log(`Total Borrowed: $${loanObj.totalBorrowed}`);
  console.log(`Loan Term: ${loanObj.termMonths} Months`);
  console.log(`APR: ${loanObj.apr}%`);
  console.log('=========================\n');
  prompt(`${messageConfig.result} \n$${loanObj.monthlyPayment.toFixed(2)}`);
}

function getUserNumber(configMessage) {
  prompt(configMessage);
  return Number(readline.question());
}

function invalidNumber(number) {
  return !Number.isFinite(number) || [-1, 0, -0].includes(Math.sign(number));
}

function checkUserInput(number, errorMessage, allowDecimal = true) {
  while (allowDecimal ? invalidNumber(number) : invalidNumber(number) ||
                                                (number % 1) > 0) 
  {
    prompt(errorMessage);
    number = Number(readline.question());
  }
  return number;
}

function predatoryLoan(number) {
  if (number >= 16) {
    prompt(messageConfig.predatory + '\n');
  }
}

function loanSolve(loanObj) {
  return loanObj.totalBorrowed * (loanObj.monthlyRate /
  (1 - Math.pow((1 + loanObj.monthlyRate), (-loanObj.termMonths))));
}

do {
  console.clear();

  greetUser();

  const loan = {};

  // get users total borrowed money, validate, save to object
  let totalBorrowed = getUserNumber(messageConfig.loanTotal);
  totalBorrowed = checkUserInput(totalBorrowed, messageConfig.invalidNumber, true);
  loan["totalBorrowed"] = totalBorrowed;

  // get users loan term length, validate, save to object
  let termMonths = getUserNumber(messageConfig.termMonths);
  termMonths = checkUserInput(termMonths, messageConfig.invalidNumber, false);
  loan["termMonths"] = termMonths;

  // get user apr, validate, save to object
  let apr = getUserNumber(messageConfig.annualPercentageRate);
  apr = checkUserInput(apr, messageConfig.annualPercentageRateInvalid, true);
  loan["apr"] = apr;

  console.clear();

  predatoryLoan(apr);

  loan["monthlyRate"] = (loan.apr / 100) / 12;

  loan["monthlyPayment"] = loanSolve(loan);

  displayResults(loan);
} while (executeAgain());

prompt(messageConfig.goodbye);