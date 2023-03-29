function multiplyAllPairs(arr1, arr2) {
  // return a new array with all elements in arr1 multiplied by all elements in arr2
  let multipliedArr = [];
  arr1.forEach( num1 => {
    arr2.forEach( num2 => multipliedArr.push(num1 * num2));
  });
  return multipliedArr.sort( (a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));