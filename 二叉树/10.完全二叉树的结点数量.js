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
var countNodes = function (root) {
  const getNum = (node) => {
      if (node === null) {
          return 0
      }
      // 后序遍历
      let leftNum = getNum(node.left)
      let rightNum = getNum(node.right)
      return leftNum + rightNum + 1
  }
  return getNum(root)
};

// 根据完全二叉树优化
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
var countNodes = function (root) {
  const getNum = (node) => {
      if (node === null) {
          return 0
      }
      let left = node.left, right = node.right;
      let leftDepth = 0, rightDepth = 0;
      while (left) {
          left = left.left
          leftDepth++
      }
      while (right) {
          right = right.right
          rightDepth++
      }
      if (leftDepth === rightDepth) {
          return Math.pow(2, leftDepth + 1) - 1;
      }
      let leftNum = getNum(node.left)
      let rightNum = getNum(node.right)
      return leftNum + rightNum + 1
  }
  return getNum(root)
};