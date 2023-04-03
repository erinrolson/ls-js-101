function wordLengths(string = '') {
  if (string.length === 0) return [];
  
  return string
  .split(' ')
  .map( word => `${word}  ${word.length}`);
}

console.log(wordLengths());