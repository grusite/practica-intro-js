import { romanNumbersAsociation, romanRegExp } from "./utils.mjs";

function romanNumberValidator(romanNumber) {
  return romanRegExp.test(romanNumber.toUpperCase());
}

function romanToArabicConverter(romanNumber) {
  const toMatch = /(CM|CD|XC|XL|IX|IV|[MDCLXVI])/g;

  const reducer = (arabicNumber, romanSliced) => {
    return (arabicNumber += romanNumbersAsociation[romanSliced]);
  };

  return romanNumberValidator(romanNumber)
    ? romanNumber
        .toUpperCase()
        .match(toMatch)
        .reduce(reducer, 0)
    : "Por favor, introduce número romano válido";
}

function arabicToRomanConverter(arabicNumber) {
  let romanNumber = "";
  let resto = 0;

  if (arabicNumber >= 1 && arabicNumber <= 3999) {
    for (let key in romanNumbersAsociation) {
      resto = Math.floor(arabicNumber / romanNumbersAsociation[key]);
      if (resto > 0) {
        for (let i = 0; i < resto; i++) {
          romanNumber += key;
        }
      }
      arabicNumber = arabicNumber % romanNumbersAsociation[key];
    }
  } else {
    return "Por favor, introduce un valor entre 1 y 3999";
  }
  return romanNumber;
}

// Tests for romanToArabic function
// prettier-ignore
const testsRomans = ["iv", "A", "V", "B", "XX", "C", "M", "D", "mmcm", "E", "CLX", "F", "CLXX", "G", "MMMCMXCIX", "H", "MDCLXVI", "I", "MCMXC", "J", "MMVIII"];
console.log("\n Test romanToArabicConverter \n");
for (const test of testsRomans)
  console.log(`Number ${test} -> ${romanToArabicConverter(test)}`);

// Tests for arabicToRoman function
// prettier-ignore
const testsArabics = [0, 1, 5, 7, 15, 250, 1000, 1399, 2435, 3000, 3250, 3700, 3999, 4001];
console.log("\n Test arabicToRomanConverter \n");
for (const test of testsArabics)
  console.log(`Number ${test} -> ${arabicToRomanConverter(test)}`);
