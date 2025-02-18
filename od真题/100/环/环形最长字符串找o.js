const readline = require("readline"); // 引入读取输入的模块

const rl = readline.createInterface({
  input: process.stdin, // 定义输入流
  output: process.stdout, // 定义输出流
});

const input = []; // 存储输入的所有数据

rl.on("line", (str) => {
  let oNum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "o") {
      oNum++;
    }
  }
  console.log(oNum % 2 ===0 ? str.length : str.length-1);
});
