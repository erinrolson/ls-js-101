let logInBox = (string) => {
  let lenString = '+' + '-'.repeat(string.length + 2) + '+';
  let emptyString = '|' + ' '.repeat(string.length + 2) + '|';
  
  console.log(`${lenString}\n${emptyString}\n| ${string} |\n${emptyString}\n${lenString}`);
}

logInBox('');