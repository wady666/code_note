/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];

  const backtracking = (start, path) => {
    // start是枚举选择的起点 path是当前构建的路径（组合）
    if (path.length == k) {
      res.push(path.slice()); // 拷贝一份path，推入res
      return; // 结束当前递归
    }
    // for (let i = start; i <= n; i++) { // 枚举出所有选择
    for (let i = start; i <= n - (k - path.length) + 1; i++) {
      // 剪枝
      path.push(i); // 处理节点
      backtracking(i + 1, path); // 递归
      path.pop(); // 回溯，撤销处理结果
    }
  };

  backtracking(1, []); // 递归的入口，从数字1开始选
  return res;
};
