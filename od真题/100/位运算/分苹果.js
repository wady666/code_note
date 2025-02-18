const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n;  // 苹果数量
let a;  // 每个苹果的重量数组
// 思路：1.二进制不进位计算后 等于另一堆的和 实际上就是所有位运算后之和=0（位运算即为 二进制后加法不进位）。如果不为0则说明不存在这种情况
// 2.求总和最大就相当于找最小的一个 让其他的减去他



// 读取输入的第一行，苹果数量 n
rl.on('line', (inputN) => {
  n = parseInt(inputN);
  
  // 读取输入的第二行，苹果的重量列表
  rl.on('line', (inputA) => {
    a = inputA.split(' ').map(Number);
    
    // 初始化异或总和
    let sums = 0;
    // 初始化最小值为 JavaScript 中安全的最大整数
    let min_val = Number.MAX_SAFE_INTEGER;
    
    // 遍历所有苹果的重量
    a.forEach((x) => {
      // 按位异或操作，更新异或总和
      sums = sums ^ x;
      // 找到当前最小的苹果重量
      if (x < min_val) {
        min_val = x;
      }
    });
    
    // 如果异或总和不为 0，则无法按 A 的规则分堆，输出 -1
    if (sums !== 0) {
      console.log(-1);
    } else {
      // 计算所有苹果重量的总和
      const total_sum = a.reduce((sum, x) => sum + x, 0);
      // 输出 B 可以获取的最大苹果重量（总和减去最小的苹果重量）
      console.log(total_sum - min_val);
    }
    
    rl.close();  // 关闭读取接口
  });
});
