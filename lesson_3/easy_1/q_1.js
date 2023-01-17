// Prompt: will the following code raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;
/* Answer: no error will be raised.
So what does happen?
   - <3 empty items> will be placed into the array
   - the value of 5 will be placed at index 6
 */
 // Bonus prompt
 numbers[4]; // what does this line return?
 /* line 10 returns undefined. index 4 is an empty item. 
 Though it returns undefined, the value of undefined is not present at that location.
 */