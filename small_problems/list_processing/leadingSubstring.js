function leadingSubstrings(string) {
  // return an array of substrings
  let substrings = [];
  for ( let index = 1; index <= string.length; index++ ) {
    substrings.push( string.slice(0, index) );
  }
  return substrings;
}

console.log(leadingSubstrings('xyzzy'));

////////////////////////////////////////////
// further exploration.... try using map, filter, or reduce => requires join!
function leadingSubstringsMap(string) {
  let count = 0;
  return [...string].map( ele => {
    if ( count === 0 ){
      count++;
      return ele;
    } 
    let substr = [...string].filter( (ele, index) => index <= count).join('');
    count++;
    return substr;
  });
}

console.log(leadingSubstringsMap('abc'));