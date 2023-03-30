function leadingSubstrings(string) {
  // return an array of substrings
  let substrings = [];
  for ( let index = 1; index <= string.length; index++ ) {
    substrings.push( string.slice(0, index) );
  }
  return substrings;  //[ 'x', 'xy', 'xyz', 'xyzz', 'xyzzy' ]
}

function substrings(string) {
  let count = 0;
  let subArr = [];
  
  [...string].forEach( (ele, index) => {
    subArr = subArr.concat( leadingSubstrings( [...string].slice(count).join('') ) );
    count++;
  });
  
  return subArr;
}

console.log(substrings('abc'));

