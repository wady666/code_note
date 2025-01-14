/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = []
  candidates.sort((a, b) => a - b)
  const backtracking = (path, sum, startIndex) => {
      if (sum > target) {
          return
      }
      if (sum === target) {
          res.push(path.slice())
          return
      }
      for (let i = startIndex; i < candidates.length; i++) {
          // 避免出现同一层重复
          if (i - 1 >= startIndex && candidates[i - 1] == candidates[i]) {
              continue;
          }
          path.push(candidates[i])
          backtracking(path, sum + candidates[i], i + 1)
          path.pop()
      }
  }
  backtracking([], 0, 0)
  return res
};