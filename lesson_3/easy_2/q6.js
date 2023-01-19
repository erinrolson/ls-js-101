// prompt: create a single array element from the nested array
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// create a new array in with all the following elements in an un-nested format
let newArray = [].concat(...flintstones);

console.log(newArray);