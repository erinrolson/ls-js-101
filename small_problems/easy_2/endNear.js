function penultimate(words) {
  let wordArr = words.split(' ');
  return wordArr[wordArr.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true