// make this work without a do/while loop
// currently fails when input is 0 or negative number
// 

function factors(number) {
  let factors = [];
  let divisor = number;
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
  }
  return factors;
}
