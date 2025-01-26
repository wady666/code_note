const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (num) => {
  let str = num.toString();
  let ans = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    let curNum = Number(str[i]) >= 4 ? Number(str[i]) - 1 : Number(str[i]);
    ans += curNum * (9 ** (str.length - i - 1));
  }
  console.log(ans);
});
