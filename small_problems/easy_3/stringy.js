function stringy(number) {
  let newStr = '10'.repeat(number / 2);
  if (number % 2 > 0) {
    newStr += '1';
  }
  return newStr;
  
}

console.log(stringy(9));