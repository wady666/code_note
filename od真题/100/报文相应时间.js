const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numQueries; // 存储查询的数量
let arrivalTime = []; // 存储每次查询的到达时间
let maxRespCode = []; // 存储每次查询的最大响应码

rl.on("line", (input) => {
  // 首次输入，用于获取查询的数量
  if (!numQueries) {
    numQueries = parseInt(input); // 解析输入为整数，并存储到 numQueries
  } else {
    // 分割输入的两个数值，并将其转换为数字类型
    const [a, b] = input.split(" ").map(Number);
    arrivalTime.push(a); // 将到达时间存入 arrivalTime 数组
    maxRespCode.push(b); // 将最大响应码存入 maxRespCode 数组

    // 当输入的查询数达到指定的数量时，开始处理计算
    if (arrivalTime.length === numQueries) {
      let minResponseTime = Number.MAX_SAFE_INTEGER; // 初始化最小响应时间为一个很大的值
      for (let i = 0; i < arrivalTime.length; i++) {
        let curMinTime = 0;
        if (maxRespCode[i] <= 128) {
          curMinTime = arrivalTime[i] + maxRespCode[i];
        } else {
          let binaryNumber = maxRespCode[i].toString(2);
          let exp = parseInt(binaryNumber.substring(0, 3),2);
          let mant = parseInt(binaryNumber.substring(3, 7),2);
          let currespCode = (mant | 0x10) << (exp + 3);
          curMinTime = arrivalTime[i] + currespCode;
        }
        minResponseTime = Math.min(curMinTime, minResponseTime);
      }

      console.log(minResponseTime); // 输出最小响应时间
      rl.close(); // 关闭 readline 接口
    }
  }
});