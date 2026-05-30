// * Given a number n, find the sum of its digits.
function sumOfDigits(n) {
  return n
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}

// * Given an Integer n, find the reverse of its digits.
function reverseDigits(n) {
  const isNegative = n < 0;
  const reversed = Math.abs(n).toString().split("").reverse().join("");
  return isNegative ? -parseInt(reversed) : parseInt(reversed);
}
