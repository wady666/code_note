/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const ans = []
  nums.sort((a, b) => a - b)
  const backtracking = (path, used) => {
      if (path.length === nums.length) {
          ans.push(path.slice())
          return
      }
      for (let i = 0; i < nums.length; i++) {
          // 树层去重 需要保证与前一个不同，且前一个已经取了
          if (i > 0 && nums[i] === nums[i - 1]&& !used[i-1]) continue
          // 用used来树枝去重
          if (!used[i]) {
              used[i] = true
              path.push(nums[i])
              backtracking(path, used)
              // 回溯时需弹出
              used[i] = false
              path.pop()
          }
      }
  }
  backtracking([], [])
  return ans
};