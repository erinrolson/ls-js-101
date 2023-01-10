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
- log monthly payment amount formatted as a proper dollar/cents amount (two decimals)

What are the rules?
- use semantic variable names
- must log payment amount in proper currency format w/ two decimal places
- code must be checked with ESLint 

Step 2) [E]xamples and Test Cases
==================================
Hint 1: Look at the examples and test cases provided to confirm understanding of problem.
 - for this problem the example we are given is an already-made loan calculator on the internet.
    - loan amount 
      * should be in dollars 
      * accepts only positive values
      * decimals are fine, but values will be rounded to hundreds place
    - Loan duration
      * year and month values allowed (any combination)
      * must be integer, No decimals allowed
    - APR
      * always compounds monthly
      * user must enter the interest rate percentage
Hint 2: Identify implicit requirements not explicitly stated in the requirements.

----- INTERMISSION -----
Do I have a mental model for this problem?
Do I know what I have to do to get from input to output?
 - get inputs from user -> validate inputs -> use in equation -> log value
 
[D]ata structure
=================
Object / Array
Does my data have labels?
Yes! Could use an object to store values as key:value pairs

[A]lgorithm **this is essentially the pseudocode step
================
Hint 1) You should be writing, in plain english, the logic of how to implement
your solution.
  a) this should be specific enough to outline the exact steps you're going to take
  b) BUT it shouldn't be specific enough to name methods and syntax. Should be "code agnostic"
  
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