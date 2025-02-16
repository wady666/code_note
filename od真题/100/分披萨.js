const readline = require('readline');

// 创建 readline 接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = []; // 用于存储输入行的数组
let n; // 披萨的数量
let a; // 每块披萨的美味值
let dp; // 记忆化数组，用于存储已计算过的状态

// 处理输入
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  // 处理 lines 中的数据
  [n, ...a] = lines.map(Number); // 第一行是披萨的数量，接下来的行是每块披萨的美味值
  a = a.slice(0, n); // 截取前 n 个数字作为美味值数组
  dp = Array.from({ length: n }, () => Array(n).fill(-1)); // 初始化记忆化数组

  let ans = 0; // 初始化最大美味值为 0
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, allocation((i + 1) % n, (i + n - 1) % n) + a[i]);
  }

  console.log(ans); // 输出最多能吃到的披萨的美味值总和
});

// 计算最大美味值的函数
function allocation(L, R) {
  if (dp[L][R] !== -1) {
    return dp[L][R]; // 如果已计算过，直接返回结果
  }
  if (a[L] > a[R]) {
    L = (L + 1) % n; // 左边披萨更美味，吃掉左边的
  } else {
    R = (R + n - 1) % n; // 右边披萨更美味，吃掉右边的
  }
  if (L == R) {
    dp[L][R] = a[L]; // 只剩一块披萨时，返回其美味值
  } else {
    dp[L][R] = Math.max(a[L] + allocation((L + 1) % n, R), a[R] + allocation(L, (R + n - 1) % n));
  }
  return dp[L][R]; // 返回当前状态下的最大美味值
}

