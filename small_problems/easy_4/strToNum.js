// convert a string of numeric characters to a number value
function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  
  return arrayOfDigits.reduce( (accumulator, element) => {
    return (accumulator * 10) + element;
  }, 0);
  
}

function signedString(string) {
 switch (string[0]) {
  case '+' :
   return stringToInteger(string.slice(1));
  case '-' :
   return -1 * stringToInteger(string.slice(1));
  default :
   return stringToInteger(string);
 }
}

console.log(signedString("4321") === 4321); 
console.log(signedString("-570") === -570);