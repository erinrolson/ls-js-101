function wordSizes(string) {
  let obj = {}
  
  if (string.length === 0) return obj; // guard clause
  
  let validStringArr = removeNonLetterCharacters(string);

  validStringArr.forEach(element => {
    if (obj.hasOwnProperty(element.length)) { 
      obj[element.length] += 1; 
    }
    else { 
      obj[element.length] = 1; 
    }
  });
  
  return obj;
}

function isChar(char) {
  return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
}

// return an array of string elements with all non-alphabetic characters removed
function removeNonLetterCharacters(str) {
  // create an array which contains nested arrays w/ each character of the word as an element
  let newArr = str.split(' ').map(word => {
    return [...word]; // returns an array of nested array elements [ ['F', 'o', 'u', 'r'] ]
  })
  
  // sub- arrays are reassigned to only contain elements which are valid characters
  for(let index = 0; index < newArr.length; index++) {
    newArr[index] = newArr[index].filter( character => {
    return isChar(character); // only elements passing test will be returned
  });
  
    newArr[index] = newArr[index].join(''); // each sub-array is reassigned to a string value
  }
  return newArr;
}

console.log(wordSizes('Four score and seven.'))
