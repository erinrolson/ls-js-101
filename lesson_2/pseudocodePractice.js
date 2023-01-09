// some basic practice of writing pseudocode

/*
Prompt: A function that returns the sum of two numbers

START

SET value1 = input numeric value
SET value2 = input numeric value
SET sum = value1 + value2

PRINT sum

END
*/

/*
Prompt: A function that takes an array of strings, and returns a string that is 
all those strings concatenated together.

Informal:
 - function takes an array of strings as its argument
 - use the reduce method on the input array
    - the accumulator should be set to an empty string
    - while the reduce method iterates over every string in the array
      - and each individual string to the accumulator
    - return the accumulator

START

SET arrayOfStrings = input array of strings
SET newString = empty string value
SET iterator = 0
WHILE iterator < arrayOfStrings.length
  newString += arrayOfStrings[iterator]

PRINT newString

*/