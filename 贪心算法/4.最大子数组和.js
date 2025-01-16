/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = -Infinity;
  let count = 0
  for (let i = 0; i < nums.length; i++) {
      count += nums[i]
      if (count > res) {
          res = count
      }
      if (count < 0) {
          count = 0
      }
  }
  return res
};