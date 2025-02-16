const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let [people, len] = line.split(" ").map(Number);
  let numType = people / 26 ** len;
  const ans = Math.ceil(Math.log10(numType));
  console.log(ans < 1 ? 1 : ans);
});
