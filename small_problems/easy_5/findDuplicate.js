function findDuplicate(arr) {
 return arr.find( (element, index) => {
   return arr.indexOf(element) !== index;
 });
}

let arr = [1, 5, 3, 1, 7, 6];

console.log(findDuplicate(arr));