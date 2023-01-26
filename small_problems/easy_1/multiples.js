/*
PEDA -> C

[P]roblem (understanding the)
-----------------------------
What are the inputs?
- an integer greater than 1

What are the outputs?
- a number which represents the sum of all numbers between 1 and the input number
  that are divisible by 3 OR 5

What are the rules?
- input number must be an integer > 1
- all numbers used to create the sum result must be divisible by 3 or 5


[E]xamples and test cases
--------------------------
Hint 1: Look at examples & test cases to confirm understanding of problem.

Hint 2: Identify implicit requirements not explicitly stated in requirements.
- once the number is < 3 return the answer?

==================================
Intermission
==================================
Do I have a mental model for this problem?
Do I know what I have to do to get from input to output?
get number -> check the number is integer -> identify all numbers btw 1 and input
that are divisible by 3 or 5 -> sum the numbers and return

[D]ata Structure
------------------
Object or Array?
Does your data have labels?
Not really. I can probably just use a number value?

[A]lgorithm
--------------
Hint 1) You should be writing, in plain english, the logic of how to implement
your solution.
  a) this should be specific enough to outline exact steps you're going to take
  b) BUT it shouldn't be specific enough to name methods and syntax.
     Should be "code agnostic".
     
  GET number from user
  CHECK number is an integer greater than zero
  IF the number is < 3
    RETURN number
  SET sum = 0;
  WHILE number >= 3 
    IF number is divisible by 3 OR 5 with no remainder
      add the value of number to sum
      subtract 1 from number
*/

const readline = require("readline-sync");

function isMultiple(num) {
  if ( (num % 3 === 0) || (num % 5 === 0) ) {
      return true;
    }
  return false;
}

function multisum(num) {
  let sum = 0;
  for (let i = num; i >= 3; i -= 1){
    if (isMultiple(i)) {
      sum += i;
    }
  }
  return sum;
}


let number = parseInt(readline.question("Enter an integer greater than zero\n"));


while (Number.isNaN(number)) {
  console.log("Not a valid number. Try again:");
  number = parseInt(readline.question("Enter an integer greater than zero"));
}

console.log(multisum(number));