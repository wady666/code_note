/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) {
      return 0;
  }
  let step = 0
  let endOfCanReach = 0;
  let farthestPos = 0 // 记录当前能去到的最远的位置，遍历每个点都会求能跳到的最远位置，与它比较，如果把它大就更新它
  for (let i = 0; i <= nums.length - 1; i++) {
      farthestPos = Math.max(farthestPos, nums[i] + i)
      if (i === endOfCanReach) {
          // 遍历到区间最右 则更新
          endOfCanReach = farthestPos
          step++
      }
      // 已抵达 结束循环
      if (endOfCanReach >= nums.length - 1) {
          break
      }
  }
  return step
};