let readline = require("readline-sync");

function prompt(text){
  return readline.question(text);
}

let nounInput = prompt('Enter a noun: ');
let verbInput = prompt('Enter a verb: ');
let adjectiveInput = prompt('Enter an adjective: ')
let adverbInput = prompt('Enter an adverb: ');

function madlib(noun, verb, adjective, adverb){
  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
  console.log(`The ${adjective} ${noun} ${verb + 's'} ${adverb} over the lazy ${noun}.`);
  console.log(`The ${noun} ${adverb} walks up ${adjective} Joe's turtle.`);
}

madlib(nounInput, verbInput, adjectiveInput, adverbInput);