const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (str) => {
  rl.on("line", (k) => {
    let left = 0,
      right = 0;
    const obj = {};
    while (right < str.length) {
      if (str[left] === str[right]) {
        right++;
      } else {
        if (obj[str[left]]) {
          obj[str[left]] = Math.max(obj[str[left]], right - left);
        } else {
          obj[str[left]] = right - left;
        }
        left = right;
      }
    }
    if (obj[str[left]]) {
      obj[str[left]] = Math.max(obj[str[left]], right - left);
    } else {
      obj[str[left]] = right - left;
    }
    const ans = Object.values(obj).sort((a, b) => b - a);
    console.log(ans[k - 1] ? ans[k - 1] : -1);
  });
});
