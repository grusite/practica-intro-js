// "H" -> "Hearts", "S" -> "Spades" picas, "C" -> "Clubs" treboles, "D" -> "Diamonds"
const suits = ["H", "S", "C", "D"];
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

const handRanked = hand => hand.map(card => card.rank);

const comparateHandRanking = (hand1, hand2) => {
  const hand1Ranking = handRanked(hand1).reduce(
    (count, value) => count + value
  );
  const hand2Ranking = handRanked(hand2).reduce(
    (count, value) => count + value
  );

  if (hand1Ranking > hand2Ranking) {
    return "player1";
  } else if (hand1Ranking < hand2Ranking) {
    return "player2";
  } else return "tie";
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
  const orderedHandValues = hand.map(card => card.value).sort((a, b) => a - b);
  // console.log(orderedHandValues);
  let count = 1;
  let result = "";
  let possible = "";

  for (let i = 0; i < orderedHandValues.length; i++) {
    // console.log(result);
    // console.log(possible);
    let w = i + 1;
    for (w; w < orderedHandValues.length; w++) {
      if (orderedHandValues[i] === orderedHandValues[w]) {
        count++;
      }
      // console.log(count);
    }
    if (count === 4) {
      result = "Poker";
      break;
    } else if (count === 3 && possible === "Posible Dobles Parejas") {
      result = "Full";
      break;
    } else if (count === 2 && possible === "Posible Full") {
      result = "Full";
      break;
    } else if (count === 2 && possible === "Posible Dobles Parejas") {
      result === "Dobles Parejas";
      break;
    } else if (count === 1 && possible === "Posible Full") {
      result = "Trio";
      break;
    } else if (count === 1 && possible === "Posible Dobles Parejas") {
      result = "Pareja";
    } else if (count === 1 && !possible) {
      result = "Carta más alta";
      break;
    } else if (count === 3 && !possible) {
      possible = "Posible Full";
      i = count;
      count = 1;
    } else if (count === 2 && !possible) {
      possible = "Posible Dobles Parejas";
      i = count;
      count = 1;
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

export {
  Card,
  Deck,
  handRanked,
  comparateHandRanking,
  hasSameColor,
  hasConsecutiveValues,
  resultByValues,
  resolveHand
};
