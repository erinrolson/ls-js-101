// Prompt: For this practice problem, write a program that outputs 
// The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it.
let string = 'The Flintstones Rock!';
let counter = 0;
while (counter < 10) {
  console.log(string.padStart(string.length + counter, ' '));
  counter += 1;
}