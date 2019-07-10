class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
  getCard() {
    return this.value + this.suit;
  }
}

class Deck {
  constructor() {
    this.deck = [];

    // "H" -> "Hearts", "S" -> "Spades", "C" -> "Clubs", "D" -> "Diamonds"
    const suits = ["H", "S", "C", "D"];
    // "A" -> "Ace", "J" -> "Jack", "Q" -> "Queen", "K" -> "King"
    const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

    for (let suit in suits) {
      for (let value in values) {
        const card = new Card(values[value], suits[suit]);
        this.deck.push(card.getCard());
      }
    }
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

export { Card, Deck };
