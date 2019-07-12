// "H" -> "Hearts", "S" -> "Spades" picas, "C" -> "Clubs" treboles, "D" -> "Diamonds"
const suits = ["H", "S", "C", "D"];
// "A" -> "Ace", "J" -> "Jack", "Q" -> "Queen", "K" -> "King"
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

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

  // setCustomHand(hand) {
  //   this.hand = [];

  //   for (let i = 0; i < hand.length; i++) {
  //     hand[i] = new Card(hand[i].substr(0, 1), hand[i].substr(1, 1));
  //     this.hand.push(hand[i]);
  //   }
  //   return this.hand;
  // }

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

const handRanked = hand => hand.map(card => card.rank).sort((a, b) => a - b);

const handPairsCompareRanked = (hand1, hand2) => {
  let hand1Ranking = handRanked(hand1).filter(
    (el, i, arr) => el === arr[i + 1]
  );
  let hand2Ranking = handRanked(hand2).filter(
    (el, i, arr) => el === arr[i + 1]
  );

  if (hand1Ranking.length === 1) hand1Ranking = hand1Ranking[0];
  if (hand2Ranking.length === 1) hand2Ranking = hand2Ranking[0];

  if (hand1Ranking > hand2Ranking) {
    return "player1";
  } else if (hand1Ranking < hand2Ranking) {
    return "player2";
  } else return "tie";
};

const comparateHandRanking = (hand1, hand2) => {
  const hand1Ranking = handRanked(hand1);
  const hand2Ranking = handRanked(hand2);

  for (let i = 4; i > 0; i--) {
    if (hand1Ranking[i] > hand2Ranking[i]) {
      return "player1";
    } else if (hand1Ranking[i] < hand2Ranking[i]) {
      return "player2";
    }
  }
  return "tie";
};

const hasSameColor = hand =>
  hand.map(card => card.suit).every((val, i, arr) => val === arr[0]);

const hasConsecutiveValues = function(hand) {
  return hand
    .map(card => parseInt(card.value))
    .every((val, i, arr) => {
      if (i == arr.length - 1) return true;
      return val === arr[i + 1] - 1;
    });
};

const resultByValues = function(hand) {
  const orderedHandValues = hand
    .map(card => card.value)
    .map(a => {
      if (a === "J") return a.replace("J", 11);
      if (a === "Q") return a.replace("Q", 12);
      if (a === "K") return a.replace("K", 13);
      if (a === "A") return a.replace("A", 14);
      return a;
    })
    .map(a => parseInt(a))
    .sort((a, b) => a - b);

  let count = 1;
  let result = "";
  let possible = "";

  for (let i = 0; i < orderedHandValues.length; i++) {
    let w = i + 1;
    for (w; w < orderedHandValues.length; w++) {
      if (orderedHandValues[i] !== orderedHandValues[w]) break;
      count++;
    }
    if (count === 4) {
      result = "Poker";
      break;
    } else if (count === 3 && possible === "Posible Dobles Parejas") {
      result = "Full";
      break;
    } else if (count === 3 && possible === "Posible Parejas") {
      result = "Trio";
      break;
    } else if (count === 3 && !possible) {
      possible = "Posible Full";
      i = count - 1;
      count = 1;
    } else if (count === 2 && possible === "Posible Full") {
      result = "Full";
      break;
    } else if (count === 2 && !possible) {
      possible = "Posible Dobles Parejas";
      i = count - 1;
      count = 1;
    } else if (count === 2 && possible === "Posible Dobles Parejas") {
      result = "Dobles Parejas";
      break;
    } else if (
      count === 2 &&
      possible === "Posible Parejas" &&
      i !== orderedHandValues.length - 2
    ) {
      possible = "Posible Dobles Parejas";
      i += count - 1;
      count = 1;
    } else if (
      count === 2 &&
      possible === "Posible Parejas" &&
      i === orderedHandValues.length - 2
    ) {
      result = "Pareja";
      break;
    } else if (count === 1 && possible === "Posible Full") {
      result = "Trio";
      break;
    } else if (count === 1 && possible === "Posible Dobles Parejas") {
      result = "Pareja";
    } else if (count === 1 && !possible) {
      possible = "Posible Parejas";
    } else if (
      count === 1 &&
      possible === "Posible Parejas" &&
      i === orderedHandValues.length - 2
    ) {
      result = "Carta más alta";
      break;
    }
  }
  return result;
};

const resolveHand = function(hand) {
  if (hasSameColor(hand)) {
    if (hasConsecutiveValues(hand)) return "straightFlush";
    return "flush";
  }

  if (hasConsecutiveValues(hand)) return "straight";

  switch (resultByValues(hand)) {
    case "Poker":
      return "fourOfAKind";
    case "Full":
      return "fullHouse";
    case "Trio":
      return "threeOfAKind";
    case "Dobles Parejas":
      return "twoPairs";
    case "Pareja":
      return "pair";
    case "Carta más alta":
      return "highCard";
  }
};

const getResultado = function(player1Hand, player2Hand) {
  const resolvedHand1 = resolveHand(player1Hand);
  const resolvedHand2 = resolveHand(player2Hand);
  const p1result = Object.keys(ranks).indexOf(resolvedHand1);
  const p2result = Object.keys(ranks).indexOf(resolvedHand2);

  console.log(
    "\nEntrada: Jugador 1: " +
      player1Hand.map(card => card.getCard()) +
      " Jugador 2: " +
      player2Hand.map(card => card.getCard())
  );

  if (p1result < p2result) {
    console.log("Salida: Jugador 1 gana, " + ranks[resolvedHand1]);
  } else if (p1result > p2result) {
    console.log("Salida: Jugador 2 gana, " + ranks[resolvedHand2]);
  } else {
    if (
      resolvedHand1 === "straightFlush" ||
      resolvedHand1 === "straight" ||
      resolvedHand1 === "flush" ||
      resolvedHand1 === "highCard"
    ) {
      switch (comparateHandRanking(player1Hand, player2Hand)) {
        case "player1":
          console.log("Salida: Jugador 1 gana, " + ranks[resolvedHand1]);
          break;
        case "player2":
          console.log("Salida: Jugador 2 gana, " + ranks[resolvedHand2]);
          break;
        case "tie":
          console.log("Salida: Empate a " + ranks[resolvedHand1]);
          break;
      }
    } else {
      switch (handPairsCompareRanked(player1Hand, player2Hand)) {
        case "player1":
          console.log("Salida: Jugador 1 gana, " + ranks[resolvedHand1]);
          break;
        case "player2":
          console.log("Salida: Jugador 2 gana, " + ranks[resolvedHand2]);
          break;
        case "tie":
          console.log("Salida: Empate a " + ranks[resolvedHand1]);
          break;
      }
    }
  }
};

export {
  Card,
  Deck,
  handRanked,
  handPairsCompareRanked,
  comparateHandRanking,
  hasSameColor,
  hasConsecutiveValues,
  resultByValues,
  resolveHand,
  getResultado
};
