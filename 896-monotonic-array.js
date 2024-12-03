/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  if (nums.length < 2) return true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) break;
    if (i + 1 == nums.length) return true;
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) break;
    if (i + 1 == nums.length) return true;
  }
  return false;
};

nums = [1,3,2]
console.log(isMonotonic(nums));
