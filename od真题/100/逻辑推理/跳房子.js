const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (arr) => {
  rl.on("line", (target) => {
    arr = JSON.parse(arr);
    const ans = [];
    const min = Infinity;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          if (min > i + j) {
            ans.push([arr[i], arr[j]]);
          }
        }
      }
    }
    console.log(ans[0]);
  });
});
