import { Deck, Card, resultByValues } from "./utils.mjs";

const deck1 = new Deck();
const player1Hand = deck1.getRandomHand();
// console.log("Player 1 " + player1Hand.map(card => card.getCard()));

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
const player4Hand = [
  new Card(2, "H"),
  new Card(2, "D"),
  new Card(2, "S"),
  new Card(5, "C"),
  new Card(5, "D")
];
const player5Hand = [
  new Card(2, "H"),
  new Card(2, "D"),
  new Card(2, "S"),
  new Card(4, "C"),
  new Card(5, "D")
];
const player6Hand = [
  new Card(2, "H"),
  new Card(2, "D"),
  new Card(3, "S"),
  new Card(3, "C"),
  new Card(3, "D")
];
const player7Hand = [
  new Card(2, "H"),
  new Card(2, "D"),
  new Card(5, "S"),
  new Card(5, "C"),
  new Card(6, "D")
];
const player8Hand = [
  new Card(2, "H"),
  new Card(2, "D"),
  new Card(3, "S"),
  new Card(4, "C"),
  new Card(5, "D")
];

console.log("Resultado jugador 1: " + resultByValues(player1Hand));
console.log("Resultado jugador 2: " + resultByValues(player2Hand));
console.log("Resultado jugador 3: " + resultByValues(player3Hand));
console.log("Resultado jugador 3: " + resultByValues(player4Hand));
console.log("Resultado jugador 3: " + resultByValues(player5Hand));
console.log("Resultado jugador 3: " + resultByValues(player6Hand));
console.log("Resultado jugador 3: " + resultByValues(player7Hand));
console.log("Resultado jugador 3: " + resultByValues(player8Hand));
