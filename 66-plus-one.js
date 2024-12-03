/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 0;

  digits[digits.length - 1] += 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += carry;
    if (digits[i] > 9) {
      carry = digits[i] - 9;
      digits[i] -= 10;
    }
    else carry = 0;
  }

  if (carry != 0) {
    return [1, ...digits];
  }
  else return digits;
};

digits = [9]
console.log(plusOne(digits));
