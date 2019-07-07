const romanNumbersAsociation = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function romanNumberValidator(romanNumber) {
  for (num in romanNumber) {
    Object.keys(romanNumbersAsociation).includes(romanNumber);
  }
}

export { romanNumbersAsociation, romanNumberValidator };
