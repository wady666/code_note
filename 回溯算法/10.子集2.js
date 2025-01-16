/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  // 树层去重
  nums.sort((a, b) => a - b);
  const ans = [];
  const backtracking = (startIndex, path) => {
    ans.push(path.slice());
    if (startIndex > nums.length - 1) {
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      // 树层去重
      if (i - 1 >= startIndex && nums[i - 1] == nums[i]) {
        continue;
      }
      path.push(nums[i]);
      // 在每个节点都加入结果，而不是在叶子结点加
      backtracking(i + 1, path);
      path.pop();
    }
  };
  backtracking(0, []);
  return ans;
};
