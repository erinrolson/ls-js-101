// Given the following data structure, return a new array with the same structure, 
// but with the values in each subarray ordered -- alphabetically or numerically 
// as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map( subArr => {
  if (subArr.every( element => (typeof element === 'string'))) {
    return subArr.slice().sort();
  }
  if (subArr.every( element => (typeof element === 'number'))) {
    return subArr.slice().sort( (a,b) => {
      return a - b;
    });
  }
});

console.log(arr);
console.log(newArr);
