const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 处理输入
let input = [];
readline.on("line", (line) => {
  input.push(line);
});

readline.on("close", () => {
  const itemNumber = parseInt(input[0]); // 商品数量
  const days = parseInt(input[1]); // 售货天数

  const maxItems = input[2].split(" ").map(Number); // 每件商品最大持有数量

  const prices = input.slice(3).map((line) => line.split(" ").map(Number)); // 商品价格列表
  let maxProfit = 0;

  for (let i = 0; i < itemNumber; i++) {
    //遍历商品
    for (let j = 1; i < days; j++) {
      //遍历商品每天的利润
      const profit = Math.max(0, prices[i][j] - prices[i][j - 1]);
      maxProfit += profit * maxItems[i];
    }
  }

  console.log(maxProfit); // 输出最大利润
});
