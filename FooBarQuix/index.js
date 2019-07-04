function fooBarQuix(number) {
  let firstNumber = Math.floor(number / 10);
  let secondNumber = number % 10;

  let isDivisibleby3 = number % 3 === 0;
  let isDivisibleby5 = number % 5 === 0;
  let isDivisibleby7 = number % 7 === 0;

  let result = "";

  if (number >= 1 && number <= 100) {
    if (isDivisibleby3) result += "Foo";
    if (isDivisibleby5) result += "Bar";
    if (isDivisibleby7) result += "Quix";

    if (number < 10) {
      if (number === 3) result += "Foo";
      if (number === 5) result += "Bar";
      if (number === 7) result += "Quix";
    } else {
      if (firstNumber === 3) result += "Foo";
      if (firstNumber === 5) result += "Bar";
      if (firstNumber === 7) result += "Quix";

      if (secondNumber === 3) result += "Foo";
      if (secondNumber === 5) result += "Bar";
      if (secondNumber === 7) result += "Quix";
    }

    if (!!result) return result;
    else return number;
  } else {
    return "Por favor, introduce un valor entre 1 y 100";
  }
}

console.log("Numer 0 -> " + fooBarQuix(0));
console.log("Numer 1 -> " + fooBarQuix(1));
console.log("Numer 2 -> " + fooBarQuix(2));
console.log("Numer 3 -> " + fooBarQuix(3));
console.log("Numer 4 -> " + fooBarQuix(4));
console.log("Numer 5 -> " + fooBarQuix(5));
console.log("Numer 6 -> " + fooBarQuix(6));
console.log("Numer 7 -> " + fooBarQuix(7));
console.log("Numer 8 -> " + fooBarQuix(8));
console.log("Numer 9 -> " + fooBarQuix(9));
console.log("Numer 10 -> " + fooBarQuix(10));
console.log("Numer 13 -> " + fooBarQuix(13));
console.log("Numer 15 -> " + fooBarQuix(15));
console.log("Numer 17 -> " + fooBarQuix(17));
console.log("Numer 21 -> " + fooBarQuix(21));
console.log("Numer 33 -> " + fooBarQuix(33));
console.log("Numer 35 -> " + fooBarQuix(35));
console.log("Numer 40 -> " + fooBarQuix(40));
console.log("Numer 51 -> " + fooBarQuix(51));
console.log("Numer 53 -> " + fooBarQuix(53));
console.log("Numer 75 -> " + fooBarQuix(75));
console.log("Numer 99 -> " + fooBarQuix(99));
console.log("Numer 100 -> " + fooBarQuix(100));
