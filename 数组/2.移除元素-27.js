/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let slow = 0, fast = 0;
  while (fast < nums.length) {
      if (nums[fast] !== val) {
          nums[slow] = nums[fast]
          slow++
      }
      fast++
  }
  return slow
};
// 定义快慢指针，用快指针覆盖慢指针