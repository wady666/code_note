/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = []
  const backtracking = (path, sum, startIndex) => {
      if (sum > target) {
          return
      }
      if (sum === target) {
          res.push(path.slice())
          return
      }
      for (let i = startIndex; i < candidates.length; i++) {
          path.push(candidates[i])
          backtracking(path, sum + candidates[i], i)
          path.pop()
      }
  }
  backtracking([], 0, 0)
  return res
};