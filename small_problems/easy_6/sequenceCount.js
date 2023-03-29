function sequenceCount(count, startNum) {
  let arr = [];
  while (arr.length < count) {
    arr.push(startNum * (arr.length + 1))
  }
  return arr;
}

console.log(sequenceCount(0, 10000));