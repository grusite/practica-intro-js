function fooBarQuix(number) {
  const strs = ["Foo", "Bar", "Quix"];
  const vars = [3, 5, 7];

  const checkFns = {
    isDivisible: v => number % v === 0,
    firstNumber: v => Math.floor(number / 10) === v,
    secondNumber: v => number % 10 === v
  };

  const checkFnvalues = Object.values(checkFns);

  const reducer = (result, checkFn) =>
    result + strs.filter((v, i) => checkFn(vars[i])).join("");

  if (number >= 1 && number <= 100) {
    return checkFnvalues.reduce(reducer, "") || number;
  } else {
    return "Por favor, introduce un valor entre 1 y 100";
  }
}

// prettier-ignore
const tests = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 15, 17, 21, 33, 35, 40, 51, 53, 75, 99, 100 ];
for (const num of tests) console.log(`Number ${num} -> ${fooBarQuix(num)}`);
