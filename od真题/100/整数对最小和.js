const readline = require("readline"); // 引入读取输入的模块

const rl = readline.createInterface({
  input: process.stdin, // 定义输入流
  output: process.stdout, // 定义输出流
});

const input = []; // 存储输入的所有数据

rl.on("line", (line) => {
  // 监听每一行的输入
  input.push(line); // 将输入的行添加到数组中

  if (input.length === 3) {
    const arr1 = input[0].split(" ").map(Number);
    const arr2 = input[1].split(" ").map(Number);
    arr1.shift();
    arr2.shift();
    const ans = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        ans.push(arr1[i] + arr2[j]);
      }
    }
    const sum = ans
      .sort()
      .slice(0, Number(input[2]))
      .reduce((a, b) => a + b);
    console.log(sum);
  }
});
