/*
Tic Tac Toe is a 2-player game played on a 3x3 grid called the board. Each 
player takes a turn and marks a square on the board. The first player to get 3 
squares in a row–horizontal, vertical, or diagonal–wins. If all 9 squares are 
filled and neither player has 3 in a row, the game is a tie.
*/
const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MATCH = 5;

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
  ];

// returns the square value of an open space in a nearly won line
function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map( square => board[square] );
  if (markersInLine.filter( val => val === marker).length === 2) {
    let unusedSquare = line.find( square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function displayBoard(board) {
  console.clear();
  
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);
  
  console.log(''); 
  console.log('     |     |');
  console.log(`  ${board[1]}  |  ${board[2]}  |  ${board[3]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[4]}  |  ${board[5]}  |  ${board[6]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[7]}  |  ${board[8]}  |  ${board[9]}`);
  console.log('     |     |');
  console.log('');
}

function emptySquares(board) {
    return Object.keys(board).filter( key => board[key] === INITIAL_MARKER);
}

function joinOr(openSquares, sep = ', ', phrase = 'or') {
  switch (openSquares.length) {
    case 0 :
      return '';
    case 1 :
      return `${openSquares[0]}`;
    case 2 :
      return `${openSquares[0]} ${sep} ${openSquares[1]}`;
    default:
      return `${openSquares.slice(0,-1).join(sep) + sep}${phrase} ${openSquares.slice(-1)}`;
  }
}

function playerChoosesSquare(board) {
  let playerChoice;
  let validChoices = emptySquares(board);
  
  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    playerChoice = readline.question();

    if (validChoices.includes(playerChoice)) break;
    
    prompt('Not a valid choice, try again!');
  }
  board[playerChoice] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;
 
 // find offensive play
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  if (!square) {
    // find a defensive play second
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }
  
  // if square 5 is open, take it!
  if( emptySquares(board).includes('5') ) {
    square = '5';
  }
  
  if (!square) {
    let randomIndex = Math.floor( Math.random() * emptySquares(board).length );
    square = emptySquares(board)[randomIndex];
  }
  
  board[square] = COMPUTER_MARKER;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function fullBoard(board){
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];
    
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
      ) {
        return 'Player';
      } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
      ) {
        return 'Computer';
      }
  }
  return null;
}

function matchWon(scoreObj) {
  if( scoreObj['Player'] === 5) return 'Player';
  if ( scoreObj['Computer'] === 5) return 'Computer';
  return false;
}

while (true) {
  
  let score = { 'Player' : 0, 'Computer' : 0 };
  
  while (true) {
    let gameBoard = initializeBoard();
  
    while(true) {
      displayBoard(gameBoard);
      
      playerChoosesSquare(gameBoard);
      if ( someoneWon(gameBoard) || fullBoard(gameBoard) ) break;
      
      computerChoosesSquare(gameBoard);
      if ( someoneWon(gameBoard) || fullBoard(gameBoard) ) break;
      
    }
  
    displayBoard(gameBoard);
  
    if (someoneWon(gameBoard)) {
      prompt(`${detectWinner(gameBoard)} won!`);
      score[detectWinner(gameBoard)] = score[detectWinner(gameBoard)] + 1;
    } else {
      prompt("It's a tie!!!");
    }
    
    if ( matchWon(score) ) {
      prompt(`${matchWon(score)} has won the match!`);
      score = { 'Player' : 0, 'Computer' : 0 };
    }
    prompt('Play again? Enter: y or n');
    let answer = readline.question().toLowerCase()[0];
    if (answer !== 'y') break; 
    }
  break;
}

prompt('Thanks for playing Tic Tac Toe!');






