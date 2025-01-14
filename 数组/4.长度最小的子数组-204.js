/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let min = 9999999, left = 0, right = 0, sum = 0;
  while (right < nums.length) {
      sum += nums[right]
      while (sum >= target) {
          min = Math.min(min, right - left +1)
          sum -= nums[left]
          left++
      }
      right++
  }
  return min === 9999999 ? 0 : min
};

// 里层左移 外层右移 O(n)，里层用while不能用if