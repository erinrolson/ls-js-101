/*
PEDA -> C
[P]roblem (understanding the)
=============================
What are the inputs?
- string
- non-ASCII characters from the UTF-16 character set

What are the outputs?
- sum of all character values in a string

What are the rules?
- function must be able to handle non-ASCII characters from the 
  UTF-16 character set.
- return the sum of string characters
  
[E]xamples and test cases
==========================
1) look at the examples and test cases and ensure you understand the problem
2) what are some implied requirements?


------ Intermission ------

Do I have a mental model for this problem?
Do I know what I have to do to get from input to output?
get string -> add value of every character -> return

[D]ata Structures
==========================
Objects / Arrays
Does the data have labels?
  - not really. no data structure needed
  
[A]lgorithm
Hint 1) You should be writing, in plain english, the logic of how to implement
your solution.
  a) this should be specific enough to outline exact steps you're going to take
  b) BUT it shouldn't be specific enough to name methods and syntax.
     Should be "code agnostic".
 GET string value
 SET sum variable
 ITERATE over every character in the string
 ADD every UTF-16 value per character in string to sum variable
 RETURN sum to user
*/

function utf16Value(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i +=1) {
  sum += string.charCodeAt(i);  
  }
  return sum;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811