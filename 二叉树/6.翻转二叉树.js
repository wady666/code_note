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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const recursion = (cur) => {
      // 确认终止条件
      if (cur === null) {
          return;
      }
      // 中 做swap操作
      const node = cur.left
      cur.left = cur.right
      cur.right = node
      // 左
      recursion(cur.left);
      // 右
      recursion(cur.right);
  };
  recursion(root)
  return root
};

// 不能使用中序 因为中序是左中右 处理完左子树后翻转 遍历右子树其实是原来的左子树