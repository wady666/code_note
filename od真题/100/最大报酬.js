const readline = require("readline");
// 创建 readline 接口实例
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 用于存储输入的数据
const lines = [];
let workTime, n;
// 监听每行输入的数据
rl.on("line", (line) => {
  // 将输入的数据存入 lines 数组中
  lines.push(line);
  // 当 lines 数组长度为 1 时，表示输入的是工作时长和工作数量
  if (lines.length === 1) {
    [workTime, n] = lines[0].split(" ").map(Number);
  }
  // 当 lines 数组长度为 n + 1 时，表示输入的是 n 个工作的耗时时间和报酬
  if (n && lines.length === n + 1) {
    // 删除 lines 数组中的第一个元素，即工作耗时时间和报酬的数量
    lines.shift();
    // ------------------------以下为核心代码---------------------------
    // 将每个工作的耗时时间和报酬存入 tasks 数组中
    const tasks = lines.map((line) => line.split(" ").map(Number));
    const times = [];
    const value = [];
    tasks.map((item) => {
      times.push(item[0]);
      value.push(item[1]);
    });
    let dp = new Array(workTime + 1).fill(0);
    for (let i = 0; i < n; i++) {
      for (let j = workTime; j >= times[i]; j--) {
        dp[j] = Math.max(dp[j], dp[j - times[i]] + value[i]);
      }
    }
    console.log(dp[n]);
  }
});
