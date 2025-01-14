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
var minDepth = function(root) {
  if(!root) return 0;
  // 到叶子节点 返回 1
  if(!root.left && !root.right) return 1;
  // 只有右节点时 递归右节点
  if(!root.left) return 1 + minDepth(root.right);
  // 只有左节点时 递归左节点
  if(!root.right) return 1 + minDepth(root.left);
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};