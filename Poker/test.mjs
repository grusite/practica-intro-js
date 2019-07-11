import {
  Deck,
  Card,
  handRanked,
  comparateHandRanking,
  hasSameColor,
  hasConsecutiveValues,
  resultByValues,
  resolveHand
} from "./utils.mjs";

const card = new Card("A", "H");
const card2 = new Card(2, "H");
console.log(card);
console.log(card2);

// const hand = new Hand();
// console.log("Hand " + hand.getRandomHand());

const deck1 = new Deck();
const player1Hand = deck1.getRandomHand();
console.log(player1Hand);

const player2Hand = [
  new Card(2, "D"),
  new Card(3, "D"),
  new Card(4, "D"),
  new Card(5, "D"),
  new Card(6, "D")
];
const player3Hand = [
  new Card(2, "H"),
  new Card(2, "D"),
  new Card(2, "S"),
  new Card(2, "C"),
  new Card(5, "D")
];

console.log("Cartas del jugador 2: " + player2Hand.map(card => card.getCard()));
console.log("Cartas color del J2: " + hasSameColor(player2Hand));
console.log("Valores consec del J2: " + hasConsecutiveValues(player2Hand));
console.log("Cartas Ranked del J2: " + handRanked(player2Hand));
console.log(
  "Mayor Ranking J1 y J1: " + comparateHandRanking(player1Hand, player1Hand)
);
console.log("Cartas del jugador 1: " + player1Hand.map(card => card.getCard()));
console.log("Cartas del jugador 2: " + player2Hand.map(card => card.getCard()));
console.log("Cartas del jugador 3: " + player3Hand.map(card => card.getCard()));
// console.log("Resolviendo jugador 3: " + resultByValues(player1Hand));
console.log("Resolviendo jugador 3: " + resolveHand(player3Hand));
console.log("Resultado: Jugador 1 gana, carta más alta");
