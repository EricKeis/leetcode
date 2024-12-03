/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  arr.sort((a, b) => a - b);

  let step = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] != step) return false;
  }
  return true;
};

arr = [-68,-96,-12,-40,16];
console.log(canMakeArithmeticProgression(arr));
