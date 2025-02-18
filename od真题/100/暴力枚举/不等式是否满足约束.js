// 计算两个一维数组的点积
function dotProduct(a, b) {
  let result = 0.0;
  for (let i = 0; i < a.length; i++) {
      result += a[i] * b[i];
  }
  return result;
}

// 根据不等式约束判断一个数是否满足条件
function compareWithZero(val, constraint) {
  switch (constraint) {
      case ">":
          return val > 0;
      case ">=":
          return val >= 0;
      case "<":
          return val < 0;
      case "<=":
          return val <= 0;
      case "=":
          return Math.abs(val) < 1e-6; // 处理浮点数精度
      default:
          return false;
  }
}

// 主程序
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (input) => {
  // 解析输入
  const arr = input.split(";").map(s => s.split(","));
  
  // 将不等式系数转换为二维数组
  const matrix = arr.slice(0, 3).map(row => row.map(Number));
  
  // 将变量值转换为一维数组
  const x = arr[3].map(Number);
  
  // 将目标值转换为一维数组
  const b = arr[4].map(Number);
  
  // 将不等式符号转换为数组
  const y = arr[5];
  
  // 计算每个不等式的差值
  let diffs = [];
  let flag = true; // 判断所有不等式是否成立
  for (let i = 0; i < 3; i++) {
      // 计算左侧的点积值
      const leftValue = dotProduct(matrix[i], x);
      // 计算差值
      const diff = leftValue - b[i];
      diffs.push(diff);
      // 判断当前不等式是否成立
      if (!compareWithZero(diff, y[i])) {
          flag = false;
      }
  }
  
  // 计算最大差值
  const maxDiff = Math.max(...diffs);
  
  // 输出结果
  console.log(`${flag} ${Math.floor(maxDiff)}`);
  rl.close();
});

