// Prompt: Write three different ways to remove all of the elements from the following array:
// using a while loop. as log as numbers.length returns truthy, continue to remove array elements
let numbers = [1, 2, 3, 4];
while (numbers.length){
  numbers.pop();
}
console.log(numbers);

// use the splice method, which can add and remove elements from an array
// by passing the index value of zero, we are instructing the method to remove
// all values starting from that index
numbers = [1, 2, 3, 4];
numbers.splice(0);
console.log(numbers);

// by setting the numbers array .length property to 0 the array is truncated to 
// reflect this new length, so all values are removed.
numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);