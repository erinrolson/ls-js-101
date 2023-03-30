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
const DECK = {
//cd     #  val
  2   : [['2', 'H'], ['2', 'D'], ['2', 'S'], ['2', 'C']],
  3   : [['3', 'H'], ['3', 'D'], ['3', 'S'], ['3', 'C']],
  4   : [['4', 'H'], ['4', 'D'], ['4', 'S'], ['4', 'C']],
  5   : [['5', 'H'], ['5', 'D'], ['5', 'S'], ['5', 'C']],
  6   : [['6', 'H'], ['6', 'D'], ['6', 'S'], ['6', 'C']],
  7   : [['7', 'H'], ['7', 'D'], ['7', 'S'], ['7', 'C']],
  8   : [['8', 'H'], ['8', 'D'], ['8', 'S'], ['8', 'C']],
  9   : [['9', 'H'], ['9', 'D'], ['9', 'S'], ['9', 'C']],
  10  : [['10','H'], ['10', 'D'],['10', 'S'],['10', 'C']],
  'J' : [['J', 'H'], ['J', 'D'], ['J', 'S'], ['J', 'C']],
  'Q' : [['Q', 'H'], ['Q', 'D'], ['K', 'S'], ['Q', 'C']],
  'K' : [['K', 'H'], ['K', 'D'], ['Q', 'S'], ['K', 'C']],
  'A' : [['A', 'H'], ['A', 'D'], ['A', 'S'], ['A', 'C']]
};

let playerHand = [];
let dealerHand = [];

function calculateHandValue(hand) {
  let handTotal = 0;
  
  // do some generall adding of cards
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

function busted(value) {
  return value > WINNING_HAND_VALUE ? true : false;
}

// shuffles an array of nested array elements ---> my deck is an obj, needs adj
function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

// player hand...
while (true) {
  console.log("Do you want to HIT or STAY?");
  let answer = readline.question();
  if ( answer === 'stay' || busted(calculateHandValue(playerHand)) ) {
    break;
  }
}

if ( busted(calculateHandValue(playerHand))) {
  // dealer won the game
} else {
  // now the dealers turn
  // must continue HITTING until hand value is at least 17
}
