const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (n) => {
  rl.on("line", (m) => {
    n = Number(n);
    m = Number(m);
    if (n < 3 || n > 7) {
      console.log("-1");
      rl.close();
      return;
    }
    const start = Math.pow(10, n - 1);
    const end = Math.pow(10, n);

    const ans = [];
    for (let i = start; i < end; i++) {
      if (isWaterFlowerNumber(i, n)) {
        ans.push(i);
      }
    }
    if (m >= ans.length) {
      console.log(ans[ans.length - 1] * m);
    } else {
      console.log(ans[m]);
    }
    rl.close();
  });
});

// 判断一个数是否为水仙花数
function isWaterFlowerNumber(num, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.pow(Number(String(num)[i]), n);
  }
  return sum === num;
}
