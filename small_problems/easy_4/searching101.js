// solicit number values from user
let readlineSync = require('readline-sync');

let prompt = count => readlineSync.question(`Enter the ${count} number:\n`);

let inputNumbers = [];

inputNumbers.push(Number(prompt('1st')));
inputNumbers.push(Number(prompt('2nd')));
inputNumbers.push(Number(prompt('3rd')));
inputNumbers.push(Number(prompt('4th')));
inputNumbers.push(Number(prompt('5th')));

let lastNum = (Number(prompt('last')));



if (inputNumbers.includes(lastNum)){
  console.log(`The number ${lastNum} appears in ${inputNumbers.join()}`);
} else {
  console.log(`The number ${lastNum} does not appear in ${inputNumbers.join()}`);
}

// Second implementation of bonus snippet

function isIncluded(arr, val) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx] > val) {
      return true;
    }
  }

  return false;
}

// Instead you could use the .some prototype method 
let guard = inputNumbers.some(element => element > 10);
console.log(guard);