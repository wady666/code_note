/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length === 1)return 1
  let prediff = 0
  let curdiff = 0
  let res = 1
  for (let i = 0; i < nums.length - 1; i++) {
      curdiff = nums[i + 1] - nums[i]
      // 要么统一prediff处理 === 0的情况 要么curdiff
      if ((curdiff > 0 && prediff <= 0) || (curdiff < 0 && prediff >= 0)){
          // 记录拐点
          res++;
          prediff = curdiff
      }
  }
  return res
};