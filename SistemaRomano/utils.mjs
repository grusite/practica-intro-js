const romanNumbersAsociation = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XV: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

const romanRegExp = /^(?=[MDCLXVI])(M{0,3})(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/g;

export { romanNumbersAsociation, romanRegExp };
