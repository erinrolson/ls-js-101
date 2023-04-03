function rotateArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  
  return arr.slice(1).concat(arr[0]);
}

let array = [1, 2, 3, 4];
console.log(rotateArray(array));
console.log(array);
