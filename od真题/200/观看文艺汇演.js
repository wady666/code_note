const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;
let arr = [];

rl.on("line", (input) => {
  if (!n) {
    n = parseInt(input);
  } else {
    let [start, lastTime] = input.split(" ").map(Number);
    arr.push([start, start + lastTime]);
    if (arr.length === n) {
      // 将演出时间表按照结束时间进行排序
      arr.sort((a, b) => a[1] - b[1]);
      let ans = 1;
      let pre = arr[0][1];
      for (let i = 1; i < n; i++) {
        if (pre + 15 <= arr[i][0]) {
          pre = arr[i][1];
          ans++;
        }
      }
      console.log(ans);
    }
  }
});
