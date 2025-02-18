const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n, power, p_max;
let dp = [];

// 监听输入流中的每一行数据
rl.on('line', (line) => {
  // 如果n还未赋值，则将输入的第一行数据赋值给n
  if (!n) {
    n = parseInt(line.trim());
  } 
  // 如果power还未赋值，则将输入的第二行数据转化为数组赋值给power
  else if (!power) {
    power = line.trim().split(' ').map(Number);
  } 
  // 如果p_max还未赋值，则将输入的第三行数据赋值给p_max，并进行动态规划
  else if (!p_max) {
    p_max = parseInt(line.trim());
    // 初始化dp数组
    dp = new Array(n + 1).fill().map(() => new Array(p_max + 1).fill(0));
    // 进行动态规划
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= p_max; j++) {
        if (power[i - 1] > j) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], power[i - 1] + dp[i - 1][j - power[i - 1]]);
        }
      }
    }
    // 输出结果
    console.log(dp[n][p_max]);
    // 关闭接口实例
    rl.close();
  }
});

