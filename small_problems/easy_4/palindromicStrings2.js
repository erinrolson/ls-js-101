// case insensitive
// ignore all non-alphanumeric characters
// 
function isRealPalindrome(string){
    string = 
    string.toLowerCase() // all characters to lower case
    .split('')          // array of string characters
    .filter(char => {
        return isChar(char) || isNumeric(char);
    })                 // return an array of characters that passes the test
    .join('')         // transform array to string

    return string === string.split('').reverse().join('');
}

function isChar(char) {
    return char >= 'a' && char <= 'z';
}

function isNumeric(num) {
    return num >= '0' && num <= '9';
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));  