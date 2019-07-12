import { Deck, getResultado } from "./utils.mjs";

const deck1 = new Deck();

const tests = [
  deck1.getRandomHand(),
  deck1.getRandomHand(),
  deck1.getRandomHand(),
  deck1.getRandomHand(),
  deck1.getRandomHand(),
  deck1.getRandomHand(),
  deck1.getRandomHand(),
  deck1.getRandomHand()
];

for (let i = 0; i < tests.length - 1; i++) {
  getResultado(tests[i], tests[i + 1]);
}
