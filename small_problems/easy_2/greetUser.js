/*
[P]roblem understanding
Inputs?
- string input by user

Outputs?
- calm response
- SCREEM response

Rules?
 - if the user input string ends with !, screem back at the user
 
[A]lgorithm
PROMPT user for their name
CHECK response ends with !
IF response calm
  respond calm
IF response endswith !
  respond SCREEMING
*/

let readline = require("readline-sync");

let userResponse = readline.question("What is your name?\n");

function calmResponse(response) {
  return response.endsWith('!') ? false : true;
}

if (calmResponse(userResponse)) {
  console.log(`Hello ${userResponse}.`);
} else {
  console.log(`HELLO ${userResponse.slice(0, -1).toUpperCase()}. WHY ARE WE SCREEMING?`);
}
  