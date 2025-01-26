const readline = require("readline");
const { addAbortSignal } = require("stream");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
let n = 0,
  e = 0;

rl.on("line", (line) => {
  lines.push(line);

  if (lines.length === 1) {
    [n, e] = line.split(" ").map(Number);
    if (e === 0) {
      console.log(0);
      lines = [];
    }
  }
  if (e !== 0 && n !== 0 && lines.length === n + 1) {
    lines.shift();
    const offset = new Array(e).fill(0);
    for (let i = 0; i < lines.length; i++) {
      const [x, y] = lines[i].split(" ").map(Number);
      offset[x] = y;
    }
    const dp = new Array(e).fill(0);
    dp[0] = offset[0];
    for (let i = 1; i < e; i++) {
      dp[i] = offset[i] + dp[i - 1];
    }
    const ans = dp.reduce((a, b) => Math.abs(a) + Math.abs(b));
    console.log(ans)
  }
});
