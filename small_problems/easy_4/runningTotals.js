/*function runningTotal(arr) {
  if (arr.length === 0) return arr;
  
  let returnArray = [arr[0]];
  for (let index = 1; index < arr.length; index ++) {
    returnArray.push(returnArray[index - 1] + arr[index]);
  }
  return returnArray;
}*/

function runningTotal(arr) {
  let sum = 0;
  return arr.map( (element) => {
    return sum += element;
  });
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([])); 