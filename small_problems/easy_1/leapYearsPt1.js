/*
Try using PEDA -> C for the problem:
Prompt: determine if an input number is a leap year

Step 1) Understand the [P]roblem
=================================
What are the inputs?
- integers greater than zero


What are the outputs?
- boolean values true/false
- true if the year is a leap year
- false if the year is not

What are the rules?
- year % 4 === 0 
  - unless that year is also divisible by 100 
    - then not a leap year unless year evenly divisible by 400
- years must be integer greater than zero

Step 2) [E]xamples and Test Cases
==================================
Hint 1: Look at examples & test cases to confirm understanding of problem.

Hint 2: Identify implicit requirements not explicitly stated in requirements.

----- INTERMISSION -----
Do I have a mental model for this problem?
Do I know what I have to do to get from input to output?
get number -> check number meets leap year conditions -> return true/false

[D]ata structure
=================
Object / Array
Does my data have labels?
don't really need data structure, only returning boolean

[A]lgorithm **this is essentially the pseudocode step
================
Hint 1) You should be writing, in plain english, the logic of how to implement
your solution.
  a) this should be specific enough to outline exact steps you're going to take
  b) BUT it shouldn't be specific enough to name methods and syntax.
     Should be "code agnostic".
     
     GET year value from user
     CHECK year is integer greater than zero
     COMPARE is number divisible by 4?
     if YES 
        is number divisible by 100?
        if YES
            CHECK number divisible by 400
            if YES
                RETURN true
            if NO
                RETURN false
        if NO
            return true
*/
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return (year % 400 === 0); 
    }
    return true;
  }
  return false;
}

let readline = require("readline-sync");
let year = parseInt(readline.question("Provide a year value:\n"));

//prompt user until a valid value is passed
while (year <= 0 || Number.isNaN(year)){
  console.log("That was not a valid year number. Try again...");
  year = parseInt(readline.question("Provide a year value:\n"));
}

console.log(isLeapYear(year));
