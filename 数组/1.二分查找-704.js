/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0, right = nums.length - 1
  while (left <= right) {
      const cur = Math.floor((left + right) / 2)
      if (nums[cur] === target) {
          return cur
      } else if (nums[cur] < target) {
          left = cur + 1
      } else {
          right = cur - 1
      }
  }
  return -1
};
// 核心：left与right的区间选择，更喜欢左闭右闭的写法
// 若[left,right] 则 while (left <= right) left = cur + 1 right = cur - 1
// 若[left,right) 则 while (left < right) right = cur
