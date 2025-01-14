// 前序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const recursion = (cur, res) => {
    // 确认终止条件
    if (cur === null) {
      return;
    }
    // 根据前序遍历/中序遍历/后序遍历 写递归遍历
    // 前序 中左右
    // 中序 左中右
    // 后序 左右中
    // 中
    res.push(cur.val);
    // 左
    recursion(cur.left, res);
    // 右
    recursion(cur.right, res);
    return res;
  };
  return recursion(root, []) || [];
};

// 1.确认递归的参数和返回值
// 2.确认终止条件
// 3.曲儿单层递归的逻辑