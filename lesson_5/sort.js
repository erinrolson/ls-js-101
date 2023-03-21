// sort the sub-array's by the total values in ascending order
let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

scores.sort( (subArr1, subArr2) => {
  let sumArr1 = subArr1.reduce( (sum, value) => {
    return sum + value;
  });
  let sumArr2 = subArr2.reduce( (sum, value) => {
    return sum + value;
  });
  return sumArr1 - sumArr2;
});

console.log(scores);



