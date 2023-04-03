const DECK = [
//cd     #  val
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

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = randomIndex(index); 
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

shuffle(DECK);
console.log(DECK);

// select the first card in the deck and place it in the corresponding hand
function dealCard(deck, hand) {
  hand.push(deck.shift()) // removes the first card from the deck and places it into the hand
}

function dealHand(deck, hand_1, hand_2) {
  for (let count = 1; count < 3; count++) {
    dealCard(deck, hand_1);
    dealCard(deck, hand_2);
  }
}

//deal cards to the player and dealer
let playerHand = [];
let dealerHand = [];

dealHand(DECK, playerHand, dealerHand);
console.log({playerHand});
console.log({dealerHand});

console.log(DECK);


