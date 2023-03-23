function interleave(...args) {
  let interleavedArr = [];
  for (let i = 0; i < args[0].length; i++) {
    interleavedArr.push(args[0][i], args[1][i]);
  }
  return interleavedArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));

function interleaveForEach(arr1, arr2) {
  let newArr = [];
  arr1.forEach( (ele, index) => {
    newArr.push(arr1[index], arr2[index]);
  });
  return newArr;
}

console.log(interleaveForEach([1, 2, 3], ['a', 'b', 'c']));

function interleaveMap(arr1, arr2) {

  let newArr = arr1.map( (ele, index) => {
    return [ arr1[index], arr2[index] ];
  });
  return newArr.flat();
}

console.log(interleaveMap([1, 2, 3], ['a', 'b', 'c']));

function interleaveReduce(arr1, arr2) {
  
  let newArr = arr1.reduce( (acc, ele, idx) => {
    return [ ...acc, arr1[idx], arr2[idx] ];
  }, []);
  return newArr;
}

console.log(interleaveReduce([1, 2, 3], ['a', 'b', 'c']));
