/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  let negatives = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) return 0;
    if (nums[i] < 0) negatives++;
  }

  return negatives % 2 == 0 ? 1 : -1;
};


nums = [-1,-2,-3,-4,3,2,1]
console.log(arraySign(nums));
