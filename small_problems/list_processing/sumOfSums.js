function sumOfSums(numArr) {
  let count = 1;
  let sum = 0;
  while (count <= numArr.length) {
    sum += numArr.slice(0, count).reduce( (acc, ele) => {
      return ele + acc;
    }, 0);
    count += 1;
  }
  return sum;
}

console.log(sumOfSums([1,2,3,4,5]));