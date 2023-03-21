function integerToString(number) { 
 let arr = [];
 arr.unshift(number % 10) 

 while ( number - arr[0] ) {
  number = (number - arr[0]) / 10; 
  arr.unshift( number % 10 ) 
 } 
 return arr.join('');
}

function signedIntegerToString(signedInt) {
 if (signedInt > 0) {
  return '+' + integerToString(signedInt);
 } else if (signedInt < 0) {
  return '-' + integerToString(signedInt * -1);
 } else {
  return integerToString(signedInt);
 }
}

console.log(signedIntegerToString(-0));