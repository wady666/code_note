const readline = require("readline"); // 引入读取输入的模块

const rl = readline.createInterface({
  input: process.stdin, // 定义输入流
  output: process.stdout, // 定义输出流
});

const input = []; // 存储输入的所有数据

rl.on("line", (line) => {
  // 监听每一行的输入
  input.push(line); // 将输入的行添加到数组中

  if (input.length === parseInt(input[1]) + 2) {
    // 当输入完所有数据后
    const length = Number(input[0]);
    let maxLength = 0;
    const arr = input.slice(2).map((item) => {
      maxLength = Math.max(item.length, maxLength);
      return item.split(",").map(Number);
    });
    const ans = [];
    for (let i = 0; i < maxLength; i += length) {
      for (let j = 0; j < arr.length; j++) {
        let start = i;
        let end = Math.min(i + length, arr[j].length);
        if (start < arr[j].length) {
          ans.push(...arr[j].slice(start, end));
        }
      }
    }
    console.log(ans.join(','));
  }
});
