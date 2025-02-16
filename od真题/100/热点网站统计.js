const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
const map = new Map();

rl.on("line", (line) => {
  lines.push(line);
  if (/^\d+$/.test(line)) {
    const arr = Array.from(map);
    arr.sort((a, b) => {
      return b[1] - a[1] === 0 ? a[0].localeCompare(b[0]) : b[1] - a[1];
    });
    let ans = arr.slice(0, Number(line)).map((item) => item[0]);
    console.log(ans.join(","));
    lines.length = 0;
  } else {
    map.set(line, map.has(line) ? map.get(line) + 1 : 1);
  }
});
