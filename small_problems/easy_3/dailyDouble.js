let crunch = (string) => {
  // iterate through all characters of the string
  // if the current character matches the preceding character, skip
  // else add the character to the string you will return
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index - 1] === string[index]) {
      continue;
    }
    newString += string[index];
  }
  return newString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""