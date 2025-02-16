const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let fileSizeArray = [];

rl.on("line", (input) => {
  if (!n) {
    n = parseInt(input);
  } else {
    fileSizeArray.push(parseInt(input));
    if (fileSizeArray.length === n) {
      rl.close();
      let total = 1474560 / 512;
      const dp = new Array(total).fill(0);
      fileSizeArray.map((file) => {
        const weight = Math.ceil(file / 512);
        const worth = file;
        for (let i = total; i >= weight; i++) {
          dp[i] = Math.max(dp[i], dp[i - weight] + weight);
        }
      });
    }
  }
  console.log(dp)
});
