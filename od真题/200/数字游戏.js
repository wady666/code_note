const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let isFirstLine = true;
let n, m, cardNumbers;

rl.on("line", (line) => {
  if (isFirstLine) {
    // 读取输入的n和m，n代表牌的数量，m代表小明手中牌上的数字
    [n, m] = line.split(" ").map(Number);
    isFirstLine = false;
  } else {
    // 读取后续发的n张牌的数字
    cardNumbers = line.split(" ").map(Number);

    let ans = false;
    const backtracking = (sum, index) => {
      if (index > n) {
        return;
      }
      if (sum === m) {
        ans = true;
        return;
      }
      for (let i = index; i < n; i++) {
        index++;
        sum += cardNumbers[i];
        backtracking(sum, index);
        index--;
        sum -= cardNumbers[i];
      }
    };

    backtracking(0,0)
    console.log(ans ? 1:0);

    isFirstLine = true;
  }
});