import {
  Deck,
  Card,
  handRanked,
  isSameColor,
  hasConsecutiveValues
} from "./utils.mjs";

const result = { win: 1, loss: 2, tie: 3 };
const ranks = [
  "Straight flush",
  "Four of a kind",
  "Full house",
  "Flush",
  "Straight",
  "Three of a kind",
  "Two pairs",
  "Pair",
  "High card"
];

const card = new Card("A", "H");
console.log(card);

// const hand = new Hand();
// console.log("Hand " + hand.getRandomHand());

const deck1 = new Deck();
const player1Hand = deck1.getRandomHand();
const player2Hand = deck1.getRandomHand();

const myHand = ["2D", "3D", "4D", "5D", "6D"];
const player3Hand = deck1.setCustomHand(myHand);

console.log("Cartas del jugador 3: " + player3Hand.map(card => card.getCard()));
console.log("Cartas color del j3: " + isSameColor(player3Hand));
console.log("Valores cons del j3: " + hasConsecutiveValues(player3Hand));
console.log("Cartas Ranked del j1: " + handRanked(player1Hand));
console.log("Cartas del jugador 1: " + player1Hand.map(card => card.getCard()));
console.log("Cartas del jugador 2: " + player2Hand.map(card => card.getCard()));
console.log("Resultado: Jugador 1 gana, carta más alta");
