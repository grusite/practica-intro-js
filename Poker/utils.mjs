// "H" -> "Hearts" red, "S" -> "Spades" picas black, "C" -> "Clubs" treboles black, "D" -> "Diamonds" red
const suits = ["H", "S", "C", "D"];
const red = ["H", "D"];
const black = ["S", "C"];
// "A" -> "Ace", "J" -> "Jack", "Q" -> "Queen", "K" -> "King"
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
    this.rank = values.indexOf(this.value);
  }
  getCard() {
    return this.value + this.suit;
  }
}

class Deck {
  constructor() {
    this.deck = [];

    for (let suit in suits) {
      for (let value in values) {
        const card = new Card(values[value], suits[suit]);
        this.deck.push(card);
      }
    }
  }

  getDeck() {
    for (let i = 0; i < this.deck.length; i++) {
      this.deck[i] = this.deck[i].getCard();
    }
    return this.deck;
  }

  setCustomHand(hand) {
    this.hand = [];

    for (let i = 0; i < hand.length; i++) {
      hand[i] = new Card(hand[i].substr(0, 1), hand[i].substr(1, 1));
      this.hand.push(hand[i]);
    }
    return this.hand;
  }

  getRandomHand() {
    this.hand = [];

    let randomDeckNumber = 0;
    const handCards = 5;

    for (let i = 0; i < handCards; i++) {
      randomDeckNumber = Math.floor(Math.random() * this.deck.length);
      this.hand.push(this.deck[randomDeckNumber]);
    }
    return this.hand;
  }
}

// class Hand {
//   constructor() {
//     this.hand = [];
//   }

//   setCustomHand(hand) {
//     for (let i = 0; i < hand.length; i++) {
//       hand[i] = new Card(hand[i].substr(0, 1), hand[i].substr(1, 1));
//       this.hand.push(hand[i]);
//     }
//     return this.hand;
//   }

//   getRandomHand() {
//     let randomDeckNumber = 0;
//     const handCards = 5;
//     const deck = new Deck();

//     for (let i = 0; i < handCards; i++) {
//       randomDeckNumber = Math.floor(Math.random() * this.deck.length);
//       this.hand.push(deck.deck[randomDeckNumber]);
//     }
//     return this.hand;
//   }
// }

const handRanked = hand => hand.map(card => card.rank);

const isSameColor = hand =>
  hand.map(card => card.suit).every((val, i, arr) => val === arr[0]);

const hasConsecutiveValues = function(hand) {
  return hand
    .map(card => parseInt(card.value))
    .sort()
    .every((val, i, arr) => {
      if (i == arr.length - 1) return true;
      return val === arr[i + 1] - 1;
    });
};

const repeatedValues = function(hand) {
  hand.map(card => parseInt(card.value)).sort();
};

const straightFlush = function(hand) {};

export { Card, Deck, handRanked, isSameColor, hasConsecutiveValues };
