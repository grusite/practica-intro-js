import { Deck } from "../Deck.mjs";
import { Card } from "../Card.mjs";
import { resultByValues } from "../utils.mjs";

const deck1 = new Deck();
const player1Hand = deck1.getRandomHand();

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
const player31Hand = [
  new Card(2, "H"),
  new Card(3, "D"),
  new Card(3, "S"),
  new Card(3, "C"),
  new Card(3, "D")
];
const player4Hand = [
  new Card(2, "H"),
  new Card(2, "D"),
  new Card(2, "S"),
  new Card(5, "C"),
  new Card(5, "D")
];
const player41Hand = [
  new Card(2, "H"),
  new Card(3, "D"),
  new Card(3, "S"),
  new Card(3, "C"),
  new Card(5, "D")
];
const player42Hand = [
  new Card(2, "H"),
  new Card(3, "D"),
  new Card(4, "S"),
  new Card(4, "C"),
  new Card(4, "D")
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
const player9Hand = [
  new Card(1, "H"),
  new Card(2, "D"),
  new Card(2, "S"),
  new Card(3, "C"),
  new Card(3, "D")
];
const player10Hand = [
  new Card(1, "H"),
  new Card(2, "D"),
  new Card(2, "S"),
  new Card(3, "C"),
  new Card(4, "D")
];
const player11Hand = [
  new Card(1, "H"),
  new Card(2, "D"),
  new Card(3, "S"),
  new Card(3, "C"),
  new Card(4, "D")
];
const player12Hand = [
  new Card(1, "H"),
  new Card(2, "D"),
  new Card(3, "S"),
  new Card(4, "C"),
  new Card(4, "D")
];

console.log(
  "Resultado jugador 1: " +
    player1Hand.map(card => card.getCard()) +
    " " +
    resultByValues(player1Hand)
);
console.log(
  "Resultado jugador 2: " +
    player2Hand.map(card => card.getCard()) +
    " " +
    resultByValues(player2Hand)
);
console.log(
  "Resultado jugador 3: " +
    player3Hand.map(card => card.getCard()) +
    " " +
    resultByValues(player3Hand)
);
console.log(
  "Resultado jugador 3-1: " +
    player31Hand.map(card => card.getCard()) +
    " " +
    resultByValues(player31Hand)
);
console.log(
  "Resultado jugador 4: " +
    player4Hand.map(card => card.getCard()) +
    " " +
    resultByValues(player4Hand)
);
console.log(
  "Resultado jugador 4-1: " +
    player41Hand.map(card => card.getCard()) +
    " " +
    resultByValues(player41Hand)
);
console.log(
  "Resultado jugador 4-2: " +
    player42Hand.map(card => card.getCard()) +
    " " +
    resultByValues(player42Hand)
);
console.log(
  "Resultado jugador 5: " +
    player5Hand.map(card => card.getCard()) +
    " " +
    resultByValues(player5Hand)
);
console.log(
  "Resultado jugador 6: " +
    player6Hand.map(card => card.getCard()) +
    " " +
    resultByValues(player6Hand)
);
console.log(
  "Resultado jugador 7: " +
    player7Hand.map(card => card.getCard()) +
    " " +
    resultByValues(player7Hand)
);
console.log(
  "Resultado jugador 8: " +
    player8Hand.map(card => card.getCard()) +
    " " +
    resultByValues(player8Hand)
);
console.log(
  "Resultado jugador 9: " +
    player9Hand.map(card => card.getCard()) +
    " " +
    resultByValues(player9Hand)
);
console.log(
  "Resultado jugador 10: " +
    player10Hand.map(card => card.getCard()) +
    " " +
    resultByValues(player10Hand)
);
console.log(
  "Resultado jugador 11: " +
    player11Hand.map(card => card.getCard()) +
    " " +
    resultByValues(player11Hand)
);
console.log(
  "Resultado jugador 12: " +
    player12Hand.map(card => card.getCard()) +
    " " +
    resultByValues(player12Hand)
);
