function xor(param1, param2) {
  if ((param1 && !param2 ) || (!param1  && param2 )) {
    return true;
  } 
  return false;
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true