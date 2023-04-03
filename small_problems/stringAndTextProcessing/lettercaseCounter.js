function letterCaseCount(string) {
  
  return {
    'lowercase' : lowercaseLetters(string),
    'uppercase' : uppercaseLetters(string),
    'neither'   : notUpperOrLowercaseLetters(string)
  }
}

function uppercaseLetters(string) {
  return string.match(/[A-Z]/g) ? string.match(/[A-Z]/g).length : 0;
}

function lowercaseLetters(string) {
  return string.match(/[a-z]/g) ? string.match(/[a-z]/g).length : 0;
}

function notUpperOrLowercaseLetters(string) {
  return string.match(/[^A-Za-z]/g) ? string.match(/[^A-Za-z]/g).length : 0;
}

console.log(letterCaseCount(''));
