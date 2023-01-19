let munstersDescription = 'The Munsters are creepy and spooky.';
// return a new string with the cases of all letters switched
let newString = munstersDescription.split('')
                                    .map(character => {
  if (character.charCodeAt() >= 65 && character.charCodeAt() <= 90) {
    //lowercase this letter
    return character.toLowerCase();
  } else {
    return character.toUpperCase();
  }
} ).join('');

console.log(newString);