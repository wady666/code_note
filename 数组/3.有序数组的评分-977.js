/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const ans = new Array(nums.length)
  let left = 0, right = nums.length - 1;
  let k = nums.length - 1;
  while (left <= right) {
      const leftVal = nums[left] ** 2
      const rightVal = nums[right] ** 2;
      if (leftVal > rightVal) {
          ans[k] = leftVal
          left++
      } else {
          ans[k] = rightVal
          right--
      }
      k--;
  }
  return ans
};