// Given the following data structure, sort the array so that the sub-arrays 
// are ordered based on the sum of the odd numbers that they contain.
//             8          9          4
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort( (a, b) => {
  let aSum = a.filter( ele => ((ele % 2) === 1))
              .reduce( (acc, ele) => acc + ele);
  let bSum = b.filter( ele => ((ele % 2) === 1))
              .reduce( (acc, ele) => acc + ele);

  return aSum - bSum;
});

console.log(arr);