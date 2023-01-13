const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
const VALID_ANSWERS = ['y', 'n'];

function prompt(message) {
  console.log(`==> ${message}`);
}

function randomIndex() {
  return Math.floor(Math.random() * VALID_CHOICES.length);
}

function userWon(uChoice, cChoice) {
  return ((uChoice === 'rock') && (cChoice === 'scissors') ||
      (uChoice === 'paper') && (cChoice === 'rock') ||
      (uChoice === 'scissors') && (cChoice === 'paper'));
}

function playAgain() { //simplify this
  prompt('Do you want to play again? Enter "y" or "n":');
  let answer = readline.question().trim().toLowerCase();
  while (!VALID_ANSWERS.includes(answer)) {
    prompt('enter a valid y/n value:')
    answer = readline.question().trim().toLowerCase();
  }
  return answer === 'y' ? true : false;
}

do {
  console.clear();
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let userChoice = readline.question();
  
  while (!VALID_CHOICES.includes(userChoice)) {
    prompt('Enter a valid choice (rock, paper, scissors):');
    userChoice = readline.question();
  }
  
  let computerChoice = VALID_CHOICES[randomIndex()];
  
  prompt(`User chose: ${userChoice}, computer chose ${computerChoice}`);
  
  if (userWon(userChoice, computerChoice)) {
    prompt('User won!');
  } else if (userChoice === computerChoice) {
    prompt('You tied with the computer!');
  } else {
    prompt('The computer won this round... :(');
  }
} while (playAgain());