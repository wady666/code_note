/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a)); // 排序
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] < 0 && k-- > 0) { // 负数取反（k 数量足够时）
          nums[i] = -nums[i];
      }
      sum += nums[i]; // 求和
  }
  if (k % 2 > 0) { // k 有多余的（k若消耗完则应为 -1）
      sum -= 2 * nums[nums.length - 1]; // 减去两倍的最小值（因为之前加过一次）
  }
  return sum;
};