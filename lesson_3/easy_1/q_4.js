// create a new string that has all lowercase letters, except for the first string,
// which should be capitalized
let string = "the Munsters are CREEPY and SPOOKY.";
let newString = string[0].toUpperCase() + string.slice(1).toLowerCase();
console.log(newString);