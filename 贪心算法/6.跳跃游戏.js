/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) {
    return true;
  }
  let max = 0;
  for (let i = 0; i <= max; i++) {
    max = Math.max(max, nums[i] + i);
    if (max >= nums.length - 1) {
      return true;
    }
  }
  return false;
};
