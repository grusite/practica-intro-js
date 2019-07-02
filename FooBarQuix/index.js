function fooBarQuix(number) {
  if (number >= 1 && number <= 100) {
    // if((number/10)
    return "Number: " + number + " " + (number % 0);
  } else {
    return "Por favor, introduce un valor entre 1 y 100";
  }
}

console.log(fooBarQuix(35));
console.log(fooBarQuix(0));
console.log(fooBarQuix(40));
console.log(fooBarQuix(17));
console.log(fooBarQuix(6));
