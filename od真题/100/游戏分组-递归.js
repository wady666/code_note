// 导入readline模块
const readline = require("readline");
// 创建一个readline接口实例
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 当接收到一行输入时，执行以下操作
rl.on("line", (str) => {
  const players = str.split(" ").map(Number);
  const sum = players.reduce((a, b) => a + b);
  let min = Infinity;
  const backtracking = (players, index, length, curSum) => {
    if (length === 5) {
      min = Math.min(min, Math.abs(sum - 2 * curSum));
      return;
    }
    for (let i = index; i < 10; i++) {
      backtracking(players, i + 1, length + 1, curSum + players[i]);
    }
  };
  backtracking(players, 0, 0, 0);
  console.log(min);
  rl.close();
});
