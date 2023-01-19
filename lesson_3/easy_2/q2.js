// Prompt: use the reverse array method to sort the array in reverse order, return a new array

let numbers = [1, 2, 3, 4, 5];
let reverseNumbers = numbers.concat().reverse();


console.log(reverseNumbers);

// Prompt: use sort to reverse the order of the array elements. return a new array
numbers = [1, 2, 3, 4, 5];
let sortedNumbers = [...numbers].sort((a,b) => {
  return b - a;
});

console.log(sortedNumbers);

// Bonus: can you do this using the forEach method?
numbers = [1, 2, 3, 4, 5];
let newNumbers = [];
numbers.forEach((number) => {
  newNumbers.unshift(number);
});
console.log(newNumbers);