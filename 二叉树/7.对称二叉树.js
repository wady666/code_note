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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // 使用后序遍历
  const compare = (left, right) => {
      if (left === null && right !== null) {
          return false
      } else if (left !== null && right === null) {
          return false
      } else if(left === null && right === null){
          return true
      } else if(left.val !== right.val){
          return false
      }
      let outside = compare(left.left ,right.right)
      let inside = compare(left.right,right.left)
      return outside && inside
  }
  return compare(root.left,root.right)
};