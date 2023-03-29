function reverseWords(words) {
  const WORD_LENGTH_MAXIMUM = 5;
  
  let wordArr = words.split(' ');
  
  for (let index = 0; index < wordArr.length; index++) {
    if (wordArr[index].length >= WORD_LENGTH_MAXIMUM) {
      wordArr[index] = [ ...wordArr[index] ].reverse().join('');
    }
  }
  
  return wordArr.join(' ');
}

console.log(reverseWords('Launch School'));