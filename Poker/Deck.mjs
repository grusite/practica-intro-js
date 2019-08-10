import { Card } from "./Card.mjs";
import { suits, values } from "./utils.mjs";

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

export { Deck };
