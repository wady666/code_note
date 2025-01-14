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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
      return [];
  }
  // queue记录每层的节点
  const queue = []
  queue.push(root)
  const ans = []
  while (queue.length) {
      let curLen = queue.length
      let arr = []
      // 根据上一层写好的本层queue遍历各个节点
      for (let i = 1; i <= curLen; ++i) {
          let node = queue.shift()
          // 提前写好下一层的长度queue
          node.left && queue.push(node.left)
          node.right && queue.push(node.right)
          arr.push(node.val)
      }
      ans.push(arr)
  }
  return ans
};