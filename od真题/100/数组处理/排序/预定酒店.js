const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line1) => {
  rl.on("line", (line2) => {
    let [n, k, x] = line1.split(" ").map(Number);
    const arr = line2.split(" ").map(Number);
    arr.sort((a, b) => {
      if (Math.abs(a - x) - Math.abs(b - x) === 0) {
        return a - b;
      } else {
        return Math.abs(a - x) - Math.abs(b - x);
      }
    });
    console.log(arr.slice(0, k).sort().join(" "));
  });
});
