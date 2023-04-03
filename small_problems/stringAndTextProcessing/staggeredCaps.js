function staggeredCase(string) {
  return [...string].map( (char, idx) => {
    return (idx % 2 === 0) ? char.toUpperCase() : char.toLowerCase();
  })
  .join('');
}

console.log(staggeredCase('ignore 77 the 4444 numbers'));