// consider the following object
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

//Create an array from this object that contains only Barney's name and Barney's number:

// create an array of key:value pairs
let arr = Object.entries(flintstones).filter(element => element.includes('Barney')).pop();

console.log(arr);