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

// let n = 5;

// * Problem 3: Given a number n, we need to find the sum of first n natural numbers.
function sumOfNaturalNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// * Problem 4: Given a positive integer n, we have to find the sum of squares of first n natural numbers.
function sumOfSquares(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
}

// * Problem 5: Given two numbers a and b, the task is to swap them.
function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}
const [a, b] = swap(10, 20);

// * Problem 6: GGiven two integers n and m (m != 0). Find the number closest to n and divisible by m. If there is more than one such number, then output the one having maximum absolute value.
// 1
function closestDivisible1(n, m) {
  let quotient = Math.round(n / m);
  let closest = quotient * m;
  return closest;
}
// 2
function closestDivisible2(n, m) {
  // Find the nearest multiple by rounding
  let q = Math.floor(n / m);

  // Two candidates: lower and upper multiples
  let lower = q * m;
  let upper = (q + 1) * m;

  // Compare distances
  let distLower = Math.abs(n - lower);
  let distUpper = Math.abs(n - upper);

  if (distLower < distUpper) {
    return lower;
  } else if (distUpper < distLower) {
    return upper;
  } else {
    return Math.abs(lower) > Math.abs(upper) ? lower : upper;
  }
}
