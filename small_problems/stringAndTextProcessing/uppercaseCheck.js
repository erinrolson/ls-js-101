// all characters in string must be uppercase to return true
function isUppercase(string) {
  return [...string].every( ele => ele === ele.toUpperCase());
}

console.log(isUppercase(''));