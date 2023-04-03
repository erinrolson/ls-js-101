// function returns an array of strings without any vowels
function removeVowels(arr) {
  const vowels = ['a','e','i','o','u'];
  return arr.map( string => [...string].filter( char => !vowels.includes(char.toLowerCase()))
                                       .join(''));
}

console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));