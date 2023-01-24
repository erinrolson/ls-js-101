//could take the time to implement the bonus features
let readline = require("readline-sync");
const SQMETERS_TO_SQFEET = 10.7639;

console.log('Enter width (meters):');
let width = Number(readline.prompt());

console.log('Enter length (meters):');
let length = Number(readline.prompt());

let areaInMeters = (width * length)
let areaInFt = (areaInMeters * SQMETERS_TO_SQFEET);


console.log(`The room area is: ${areaInMeters} square meters`);
console.log(`The room area is: ${areaInFt} square feet`);