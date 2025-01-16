/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const ans = []
  const backtracking = (startIndex, path) => {
      ans.push(path.slice())
      if (startIndex > nums.length - 1) {
          return
      }
      for (let i = startIndex; i < nums.length; i++) {
          path.push(nums[i])
          // 在每个节点都加入结果，而不是在叶子结点加
          backtracking(i + 1, path)
          path.pop()
      }
  }
  backtracking(0, [])
  return ans
};