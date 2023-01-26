/*
[P]roblem
Inputs?
- array that contain the elements of a person's name
- object with a persons title and occupation

Outputs?
- a properly formatted greeting that uses the name and person's title info

Rules?

[E]xamples and test cases
1) check example to ensure understanding
2) any additional rules implied? 

[D]ata structure
-nothing

[A]lgorithm
- create a new string from input name array with every name element seperated 
  by a space
*/

function greetings(arr, obj) {
 return `Hello, ${arr.join(' ')}! Nice to have a ${obj.title} ${obj.occupation} around.`;
}

console.log(greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }));