/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = []
  const backtracking = (startIndex, path, sum) => {
      // 剪支
      if (sum > n) {
          return
      }
      if (path.length == k) {
          if (sum === n) {
              res.push(path.slice())
          }
          return; // 结束当前递归
      }
      for (let i = startIndex; i <= 9-(k-path.length)+1; i++) {
          path.push(i)
          backtracking(i + 1, path, sum + i)
          path.pop()
      }
  }
  backtracking(1, [], 0)
  return res
};