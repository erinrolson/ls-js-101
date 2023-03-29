function isBalanced(string) {
  let parenthArr = string.split('').filter( ele => ele === '(' || ele === ')');
  let parens = 0;
  for (let val of parenthArr) {
    if (val === '(') parens += 1;
    if (val === ')') parens -= 1;
    if ( parens < 0 ) return false;
  }
  return parens === 0;
}

console.log(isBalanced("((What) (is this))?"));