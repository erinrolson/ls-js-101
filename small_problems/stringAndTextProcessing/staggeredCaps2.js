function isAlphabetic(char) {
  return !!char.match(/[a-z]/gi);
}

function staggeredCase(string) {
  let count = 0;
  
  return [...string]
  .map( char => {
    if (isAlphabetic(char)) {
      char = (count % 2 === 0) ? char.toUpperCase() : char.toLowerCase();
      count++;
    }
    return char;
  })
  .join('');
  
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);


