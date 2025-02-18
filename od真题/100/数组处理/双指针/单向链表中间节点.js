const readline = require("readline");

// 创建接口读取输入
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 保存链表数据的Map
let nodeMap = new Map();
let head = "";
let count = 0;
let lineCount = 0
// 读取输入的每一行
rl.on("line", (line) => {
  lineCount++;
  let data = line.split(" ");

  if (lineCount === 1) {
    // 读取头节点地址和节点数
    head = data[0];
    count = parseInt(data[1]);
  } else {
    // 存储节点信息
    nodeMap.set(data[0], [data[1], data[2]]);
    if (lineCount - 1 === count) {
      rl.close(); // 读取完毕后关闭输入
    }
  }
});

// 处理逻辑
rl.on("close", () => {
  let slow = head;
  let fast = head;
  while(nodeMap.has(fast)){
    fast = nodeMap.get(fast)[1]
    if(!nodeMap.has(fast)){
      break
    }
    fast = nodeMap.get(fast)[1]
    slow = nodeMap.get(slow)[1]
  }
  console.log(nodeMap.get(slow)[0])
});

// 双指针 快走两步 慢走一步 结果是慢