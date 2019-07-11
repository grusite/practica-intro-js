import { Deck, Card, comparateHandRanking, resolveHand } from "./utils.mjs";

const ranks = {
  straightFlush: "Escalera de Color",
  fourOfAKind: "Poker",
  fullHouse: "Full",
  flush: "Color",
  straight: "Escalera",
  threeOfAKind: "Trio",
  twoPairs: "Dobles Parejas",
  pair: "Parejas",
  highCard: "Carta más alta"
};

function resultado(player1Hand, player2Hand) {
  const resolvedHand1 = resolveHand(player1Hand);
  const resolvedHand2 = resolveHand(player2Hand);
  const p1result = Object.keys(ranks).indexOf(resolvedHand1);
  const p2result = Object.keys(ranks).indexOf(resolvedHand2);

  console.log(p1result);
  console.log(p2result);

  console.log(
    "Entrada: Jugador 1: " +
      player1Hand.map(card => card.getCard()) +
      " Jugador 2: " +
      player2Hand.map(card => card.getCard())
  );

  if (p1result < p2result) {
    console.log("Salida: Jugador 1 gana, " + ranks[resolvedHand1]);
  } else if (p1result > p2result) {
    console.log("Salida: Jugador 2 gana, " + ranks[resolvedHand2]);
  } else {
    switch (comparateHandRanking(player1Hand, player2Hand)) {
      case "player1":
        console.log("Salida: Jugador 1 gana, " + ranks[resolvedHand1]);
        break;
      case "player2":
        console.log("Salida: Jugador 2 gana, " + ranks[resolvedHand2]);
        break;
      case "tie":
        console.log("Salida: Empate, " + ranks[resolvedHand1]);
        break;
    }
  }
}

const deck1 = new Deck();
// const player1Hand = deck1.getRandomHand();

const test = [
  [
    new Card(2, "D"),
    new Card(2, "H"),
    new Card(2, "D"),
    new Card(6, "D"),
    new Card(6, "D")
  ],
  [
    new Card(2, "H"),
    new Card(2, "D"),
    new Card(2, "S"),
    new Card(6, "C"),
    new Card(7, "D")
  ],
  [
    new Card(2, "D"),
    new Card(2, "H"),
    new Card(2, "D"),
    new Card(6, "D"),
    new Card(6, "D")
  ],
  deck1.getRandomHand()
];

for (let i = 0; i < test.length - 1; i++) {
  resultado(test[i], test[i + 1]);
}
