import { values } from "./utils.mjs";

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

export { Card };
