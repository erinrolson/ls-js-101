//not my best work

// What about a century object?
function century(year) {
  let centuryNumber = Math.floor(2022 / 100) + 1;
  switch (centuryNumber) {
    case 1 :
      return 1 + 'st';
    case 2 :
      return 2 + 'nd';
    case 3 :
      return 3 + 'rd';
    default :
      return centuryNumber + 'th';
  }
}

console.log(century(2000));



