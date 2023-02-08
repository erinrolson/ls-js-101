// if the argument is NOT a double number, multiply * 2 and return // not even length or left digits != right digits
// if the argument IS a double number, return the number as-is even length, left-digits match right-digits

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  }
  return number *= 2;
}

function isDoubleNumber(number) {
  let stringNum = String(number);
  let leftDigits = stringNum.slice(0, Math.ceil(stringNum.length / 2));
  let rightDigits = stringNum.slice(Math.ceil(stringNum.length / 2));
  
  return leftDigits === rightDigits; // do the left-side digit values match the right-side digit values?
}

console.log(twice(107));