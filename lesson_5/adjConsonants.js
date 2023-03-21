/*
Given an array of strings, return a new array where the strings are sorted to 
the highest number of adjacent consonants a particular string contains. If two 
strings contain the same highest number of adjacent consonants they should retain 
their original order in relation to each other. Consonants are considered 
adjacent if they are next to each other in the same word or if there is a space 
between two consonants in adjacent words.
===============================================================================

[P]roblem
  - inputs: array of string elements
  - outputs: a new array of string elements sorted with the highest # of adjacent 
    consonants to lowest
  - rules:
    - don't mutate original array 
    - return a new array ordered by highest adjacent consonants to lowest
    - if string elements contain the same # of adjacent consonants, retain their 
      order in relation to each other
    - consonants are considered adjacent within the same word or if separated
      by a space. Consider the whole string value element for adjacency 
  Questions:
    - how to handle symbols?
===============================================================================
[E]xamples and Test cases
  1) confirm understanding of problem with the provided examples and test cases
  2) derive implicit requirements
  
===============================================================================
INTERMISSION
Do I have a mental model for this problem?
Do I know what I have to do to get from input to output?
===============================================================================
[D]ata Structures
  - Array
  - Object to track # of consonants per string element?
===============================================================================
[A]lgorithm - in plain english, do not use programming language specific language
 - make a copy of the input array to do consonant analysis on
 - compare the string elements for # of consonants 
  - iterate over string element letter by letter
  - return a count of the highest # of adjacent consonants for the string element
 
 return a number value of
   1, -1, 0
   - (-1) a before b
   - (+1) b before a
   - (0) no change in order
   
 - return the sorted array copy
 
 ==============================================================================
 - Remove the spaces from the input string
- Initialize a count to zero
- Initialize a temp string to an empty string
- Iterate through the input string. For each letter:
  - If the letter is a consonant, concatenate it to the temp string
  - If the letter is a vowel:
    - If the temp string has has a length greater than 1 AND the temp string has a length greater than the current count, set the count to the length of the temp string
    - Reset the temp string to an empty string
- Return the count
*/
function countMaxAdjacentConsonants(string) {
  string = string.split(' ').join('');
  let count = 0;
  let tempString = '';
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if ('bcdfghjklmnpqrstvwxyz'.includes(letter)) {
      tempString += letter;
      count = tempString.length;
    } else {
      if (tempString.length > 1 && tempString.length > count) { count = tempString.length }
      tempString = '';
    }
    console.log({tempString}, {count});
  }

  return count;
}

countMaxAdjacentConsonants('month');

// make an object of string element to adjacent consonant value pairs
let strArr = ['day', 'week', 'month', 'year'];
let obj = {};

for (let index = 0; index < strArr.length; index++) {
  obj[strArr[index]] = countMaxAdjacentConsonants(strArr[index]);
}
console.log(obj);

let newArr = Object.keys(obj);
newArr.sort( (a,b) => {
  return obj[b] - obj[a];
});

console.log(newArr);
  