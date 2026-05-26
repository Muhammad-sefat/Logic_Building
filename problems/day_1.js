//* Problem 1: Given a number n, check whether it is even or odd. Return true for even and false for odd.

function isEven(n) {
  let number = n % 2;
  if (number === 0) {
    return true;
  } else {
    return false;
  }
}

// * Problem 2: Given a number n, we need to print its table.
function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + n * i);
  }
}

let n = 5;
