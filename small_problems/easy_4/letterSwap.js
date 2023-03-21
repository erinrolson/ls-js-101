// swap the first and last letters in individual strings

function swap(string) {
  let stringArr = string.split(' ');
  stringArr.forEach( (element, index) => {
    stringArr[index] = swapCharacters(element);
  });
  return stringArr.join(' ');
}

function swapCharacters(word) {
  if (word.length === 1) {
    return word;
  } else {
    return word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
  }
}

console.log(swap('Oh what a wonderful day it is'));