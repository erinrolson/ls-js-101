function multiplyList(arr1, arr2) {
  return arr1.map( (ele, index) => ele * arr2[index]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));