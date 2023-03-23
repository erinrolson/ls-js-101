// make sure you are only adding digits to the array!
function digitList(num) {
  return [ ...String(num) ].map( (ele) => Number(ele) );
}

console.log(digitList(444))