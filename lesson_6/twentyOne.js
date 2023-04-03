/*
1) need a deck obj
  - total of 52 cards
  - cards 2 - 10 (face val)
  - J, Q, K (10 pts)
  - A (either 1 or 11)
    - its value is determined each time a new card is drawn from the deck
    - if the Ace with a value of 11 doesn't go over 21, it's worth 11. Otherwise 1.
    - must account for multiple aces in hand (***could be tricky!!***)
    
2) player closest to 21 w/o going over is the winner
  - BURST -> hand went over 21

3) Every game has a dealer and a player
  - deal each 2 cards
  - player can see their own card but only a single card of the dealers

4) player turn :
  - Always goes first and decides to either HIT or STAY
    - HIT -> player requests another card
    - STAY -> do not deal player any more cards for remainder of game

5) dealer turn :
  - once the player STAYS it is the dealers turn
  - dealer MUST HIT until hand total is at least 17
    - if dealer BURSTS player wins!
    
  6) comparing cards
    - when both dealer and player STAY, compare the two hands to determine winner
    
*/

/* PSEUDOCODE

52 card deck
deal 2 cards to the player and dealer
  - one-by-one
  -must show player the second card delt to dealer
player chooses to HIT or STAY
  -check for BURST each iteration
dealer turn, must HIT until at least 17
 - check for BURST each iteration
check hands for winner
*/
const readline = require('readline-sync');

const WINNING_HAND_VALUE = 21;
const ACE_MAX = 11;
const ACE_MIN = 1;
const FACE_CARD_VALUE = 10;
const FACE_CARDS = ['J', 'Q', 'K'];

const DECK = [
  ['2', 'H'], ['2', 'D'], ['2', 'S'], ['2', 'C'],
  ['3', 'H'], ['3', 'D'], ['3', 'S'], ['3', 'C'],
  ['4', 'H'], ['4', 'D'], ['4', 'S'], ['4', 'C'],
  ['5', 'H'], ['5', 'D'], ['5', 'S'], ['5', 'C'],
  ['6', 'H'], ['6', 'D'], ['6', 'S'], ['6', 'C'],
  ['7', 'H'], ['7', 'D'], ['7', 'S'], ['7', 'C'],
  ['8', 'H'], ['8', 'D'], ['8', 'S'], ['8', 'C'],
  ['9', 'H'], ['9', 'D'], ['9', 'S'], ['9', 'C'],
  ['10','H'], ['10', 'D'],['10', 'S'],['10', 'C'],
  ['J', 'H'], ['J', 'D'], ['J', 'S'], ['J', 'C'],
  ['Q', 'H'], ['Q', 'D'], ['Q', 'S'], ['Q', 'C'],
  ['K', 'H'], ['K', 'D'], ['K', 'S'], ['K', 'C'],
  ['A', 'H'], ['A', 'D'], ['A', 'S'], ['A', 'C']
];

function randomIndex(maxIndex) {
  return Math.floor(Math.random() * (maxIndex + 1)); // 0 to maxIndex
}

function calculateHandValue(hand) {
  let handTotal = 0;
  
  // do some general adding of cards
  hand.forEach( card => {
    if (card[0] === 'A') handTotal += ACE_MAX ;
    else if (FACE_CARDS.includes(card[0])) handTotal += FACE_CARD_VALUE;
    else handTotal += Number(card[0]);
  });
  
  // account for Aces
  hand.filter( ele => ele[0] === 'A').forEach( ace => {
    if (handTotal > WINNING_HAND_VALUE) {
      handTotal -= 10; //MAGIC NUMBER VIBES...
    }
  });
  
  return handTotal;
}

function winningHand(hand) {
  return calculateHandValue(hand) === WINNING_HAND_VALUE;
}

function busted(value) {
  return value > WINNING_HAND_VALUE;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = randomIndex(index); 
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

// remove the first card from the deck and place it in the corresponding hand
function dealCard(deck, hand) {
  hand.push(deck.shift());
}

// deal starting hands to the player and dealer
function dealHand(deck, hand_1, hand_2) {
  for (let count = 1; count < 3; count++) {
    dealCard(deck, hand_1);
    dealCard(deck, hand_2);
  }
}

function displayPlayerHand(hand) {
  console.log(`Players hand ${hand[0][0]}, ${hand[1][0]}`);
  console.log(`player hand value: ${calculateHandValue(hand)}`);
}

function displayDealerHand(hand) {
  console.log(`Dealers last dealt card: ${hand[1][0]}`);
}

//shuffle the deck
shuffle(DECK);

//deal cards to the player and dealer
let playerHand = [];
let dealerHand = [];

dealHand(DECK, playerHand, dealerHand);

//display the players hand
displayPlayerHand(playerHand);

//display the dealers last dealt card
displayDealerHand(dealerHand);

//if the player or dealer is dealt 21 does that player win immediately?
if (winningHand(playerHand) && winningHand(dealerHand)) {
  console.log('Its a tie!');
} else if (winningHand(playerHand)) {
  console.log(`Player has won the game!`);
} else if (winningHand(dealerHand)) {
  console.log('Dealer has won the game!');
}

// player hand...
while (true) {
  console.log("Do you want to HIT or STAY?");
  let answer = readline.question();
  //if ( answer === 'stay' || busted(calculateHandValue(playerHand)) ) {
  if ( answer === 'stay') {
    break;
  }
  // deal the player a card and display player hand to them
  dealCard(DECK, playerHand);
  displayPlayerHand(playerHand);
  if (busted(calculateHandValue(playerHand))) {
    break;
  }
  
}

if ( busted(calculateHandValue(playerHand))) {
  // dealer won the game
  console.log('The dealer has won the game! Player busted!');
} else { // dealers turn
  while (true) {
    if (calculateHandValue(dealerHand) < 17) {
      dealCard(DECK, dealerHand);
    } else break;
  }
}

// check for winner???

