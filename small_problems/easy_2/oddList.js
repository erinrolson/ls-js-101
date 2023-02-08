/*
problem:
inputs
- array with elements

Outputs:
- a new list with every other element from the original list
- always the first indexed item and then every other from there
*/
//you already know 2+ items exist in the list...
function oddities(arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 2) {
    newArr.push(arr[index]);
  }
  return newArr;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []