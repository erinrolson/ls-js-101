function swapCase(string) {
  return [...string]
    .map( char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase())
    .join('');
}

console.log(swapCase('Tonight on XYZ-TV'));