/* global BigInt */
function findFibonacciIndexByLength(digits) {
  if (digits === 1n) return digits;
  let arr = [1, 1];
  while ( String(arr[arr.length - 1]).length < digits ) {
    arr.push( (arr[arr.length - 1]) + (arr[arr.length - 2]) );
  }
  return BigInt(arr.length);
}

//console.log(findFibonacciIndexByLength(2n) === 7n);
//console.log(findFibonacciIndexByLength(3n) === 12n);
//console.log(findFibonacciIndexByLength(10n) === 45n);
//console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
