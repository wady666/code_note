// 满二叉树 全满了
// 完全二叉树 底部叶子结点左到右填充
// 二次搜索树 左小于中小于右
// 平衡二叉搜索树 左右子树高度差不能大于1

// 存储方式
// 链式存储： left right左右指针指向子树
// 数组存储

// 遍历方式
// 深度优先搜索dfs（递归）前中后序
// 前序 中左右
// 中序 左中右
// 后序 左右中

// 广度优先搜索bfs 层序遍历

// 定义方式
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
