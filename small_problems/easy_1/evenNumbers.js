// log all numbers from 1 to 99 (inclusive) to the console
// each number should be on a seperate line
let number = 1;

while ( (number <= 99)) {
  if (number % 2 === 0) {
    console.log('\n' + number);
  }
  number += 1;
}