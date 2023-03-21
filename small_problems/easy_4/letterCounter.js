// can I use array destructuring assignment here?
// function takes a string as an argument
// returns an object with keys of string length and value is the # of string elements matching that length
// empty string returns an empty obj

function wordSizes(string) {
  let obj = {}
  
  if (string.length === 0) return obj; // guard clause
  
  string.split(' ') // create an array of string elements
  .forEach(element => {
    if (obj.hasOwnProperty(element.length)) { 
      obj[element.length] += 1; 
    }
    else { 
      obj[element.length] = 1; 
    }
  });
  
  return obj;
}