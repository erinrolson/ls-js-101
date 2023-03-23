function multiplicativeAverage(arr) {
  let multiplied = arr.reduce( (acc, ele) => acc * ele, 1.0);
  return (Number.parseFloat(multiplied) / arr.length).toFixed(3);
}

console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));