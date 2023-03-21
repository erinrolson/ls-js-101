// Given the following data structure write some code to return an array 
// containing the colors of the fruits and the sizes of the vegetables. 
// The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arr = [];

for (let prop in obj) {
  if (obj[prop].type === 'fruit') {
    let arr2 = obj[prop].colors.map( ele => ele[0].toUpperCase() + ele.slice(1));
    arr.push(arr2);
  } else if(obj[prop].type === 'vegetable') {
    arr.push(obj[prop].size.toUpperCase());
  }
}
console.log(arr);