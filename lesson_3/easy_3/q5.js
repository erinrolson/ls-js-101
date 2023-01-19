/* Prompt: rewrite so there is a single return statement and no explicit
use of true or false boolean values

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}
*/
const isColorValid = color => color === "blue" || color === "green"; 
// implicit return bc only one statement
