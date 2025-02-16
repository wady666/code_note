const readline = require("readline");

// 根据货币单位返回其转换为人民币分的汇率
function exChange(unit) {
  switch (unit) {
    case "CNY":
      return 100.0; // 人民币
    case "JPY":
      return (100.0 / 1825) * 100; // 日元
    case "HKD":
      return (100.0 / 123) * 100; // 港元
    case "EUR":
      return (100.0 / 14) * 100; // 欧元
    case "GBP":
      return (100.0 / 12) * 100; // 英镑
    case "fen":
      return 1.0; // 人民币分
    case "cents":
      return 100.0 / 123; // 港元分
    case "sen":
      return 100.0 / 1825; // 日元分
    case "eurocents":
      return 100.0 / 14; // 欧元分
    case "pence":
      return 100.0 / 12; // 英镑分
    default:
      return 0.0; // 无效单位返回0
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let ans = 0; // 汇总结果

  for (let i = 1; i < input.length; i++) {
    const cur = input[i];
    let num = 0; // 用于保存金额
    let unit = ""; // 保存单位

    // 遍历当前行，逐个提取金额和单位
    for (let j = 0; j < cur.length; j++) {
      if (/\d/.test(cur[j])) {
        num = num * 10 + parseInt(cur[j]); // 构建数字
      } else {
        unit += cur[j]; // 构建货币单位
      }
      if (
        j === cur.length - 1 ||
        (/\d/.test(cur[j + 1]) && unit.length > 0)
      ) {
        ans += num * exChange(unit); // 计算并累加到总数
        num = 0; // 重置金额
        unit = ""; // 清空单位
      }
    }
  }

  // 输出汇总结果，只保留整数部分
  console.log(Math.floor(ans));
});
