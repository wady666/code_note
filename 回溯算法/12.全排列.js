/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ans = []
  const backtracking = (path, used) => {
      if (path.length === nums.length) {
          ans.push(path.slice())
          return
      }
      for (let i = 0; i < nums.length; i++) {
        // 用used来记录是否已经取了
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