const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (str) => {
  const arr = str.split("#").map(Number);
  let ans = 0;
  if (arr.length !== 4) {
    console.log("invalid IP");
    rl.close();
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      if (arr[i] < 0 || arr[i] > 128) {
        console.log("invalid IP");
        rl.close();
        return;
      }
    } else {
      if (arr[i] < 0 || arr[i] > 255) {
        console.log("invalid IP");
        rl.close();
        return;
      }
    }
    ans += arr[i] * 256 ** (arr.length - 1 - i);
  }
  console.log(ans);
});

// ip => 32位数字 256的n次方
