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
 * @return {number}
 */
var maxDepth = function (root) {
  const recursion = (node) => {
      if (node === null) {
          return 0
      }
      // 用后序遍历，求根节点的高度即为最大深度
      // 左
      let height1 = recursion(node.left);
      // 右
      let height2 = recursion(node.right);
      // 中
      return Math.max(height1,height2) +1
  }
  return recursion(root)
};