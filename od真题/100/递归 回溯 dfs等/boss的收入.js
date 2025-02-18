const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 用于存储所有分销商信息的全局变量
let n; // 分销关系的数量
const income = {}; // 记录每个分销商的收入
const ids = new Set(); // 记录所有的分销商 ID
const childToParent = {}; // 记录子分销商到父分销商的映射关系
const parentToChildren = {}; // 记录父分销商到其所有子分销商的映射关系

// 读取输入并处理
rl.on("line", (input) => {
  // 首次输入是分销关系的数量
  if (n === undefined) {
    n = Number(input);
  } else {
    // 处理每一行输入
    let [childId, parentId, childIncome] = input.split(" ").map(Number);

    // 将子分销商的收入记录在 income 映射中
    income[childId] = childIncome;
    // 将子分销商和父分销商的 ID 添加到分销商 ID 集合中
    ids.add(childId);
    ids.add(parentId);

    // 记录子分销商到父分销商的映射关系
    childToParent[childId] = parentId;

    // 如果父分销商还没有子分销商列表，则初始化一个新的列表
    if (!parentToChildren[parentId]) {
      parentToChildren[parentId] = [];
    }
    // 将当前子分销商 ID 添加到父分销商的子分销商列表中
    parentToChildren[parentId].push(childId);

    // 当所有数据读取完毕后，处理顶级分销商的收入计算
    if (--n === 0) {
      // 寻找顶级分销商 (即没有父分销商的分销商，即 boss)
      for (let id of ids) {
        if (!childToParent.hasOwnProperty(id)) {
          // 初始化顶级分销商的收入为 0，因为它自身没有任何直接收入
          income[id] = 0;
          // 调用深度优先搜索算法计算该顶级分销商的总收入（包括来自下级分销商的提成）
          const backtraking = (parentId) => {
            // 得到下属
            const children = parentToChildren[parentId];
            if (!children) {
              return;
            }
            for (const c of children) {
              backtraking(c);
              income[parentId] += Math.floor(income[c] / 100) * 15;
            }
          };
          backtraking(id);
          // 输出顶级分销商的 ID 和其计算出的总收入
          console.log(`${id} ${income[id]}`);
          // 一旦找到顶级分销商，结束循环
          break;
        }
      }

      rl.close();
    }
  }
});
