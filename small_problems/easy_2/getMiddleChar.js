function centerOf(str) {
  let strLen = str.length;
  if (strLen % 2 !== 0) {
    return str[Math.floor(strLen / 2)];
  } else {
    return str.substring( (strLen / 2) - 1, (strLen / 2) + 1 );
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x")