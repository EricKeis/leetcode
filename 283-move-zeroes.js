/**
 * @param {number[]} nums 
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let curr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[curr] = nums[i];
      if (curr != i) nums[i] = 0;
      curr++;
    }
  }
};

nums = [0,1,0,3,12]
moveZeroes(nums)
console.log(nums)
