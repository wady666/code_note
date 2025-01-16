/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const ans = []
  const backtracking = (startIndex, path) => {
      if (path.length >= 2) {
          ans.push(path.slice())
      }
      if (startIndex > nums.length - 1) {
          return
      }
      // 记录取过得元素 来做去重
      let uset = []
      for (let i = startIndex; i < nums.length; i++) {
          if (isIncrease(nums[i], path) && !uset[nums[i]]){
              uset[nums[i]] = true
              path.push(nums[i])
              backtracking(i + 1, path)
              path.pop()
          }
      }
  }
  backtracking(0,[])
  return ans
};
const isIncrease = (num, path) => {
  if (path.length <= 0 || num >= path[path.length - 1]) {
      return true
  }
  return false
}