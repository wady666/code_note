const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
let n = 0,
  m = 0;

rl.on("line", (line) => {
  lines.push(line);
  if (lines.length === 1) {
    const [nStr, mStr] = line.split(" "); // 读取n和m，n代表菜的个数，m代表手速
    n = parseInt(nStr);
    m = parseInt(mStr);
  }
  if (n > 0 && lines.length === n + 1) {
    // 当读取的行数等于n+1时，开始处理数据
    lines.shift(); // 移除第一行，因为已经读取了n和m
    const times = lines.map((item) =>
      item
        .split(" ")
        .map(Number)
        .reduce((a, b) => a + b)
    );
    let ans = [];
    const backtracking = (path, cur, arr) => {
      if (arr.length === 0) {
        ans.push(path.length);
        return;
      }
      for (let i = 0; i < arr.length; i++) {
        let temp = cur;
        path.push(arr[i]);
        cur = arr[i] + m;
        backtracking(
          path,
          cur,
          arr.filter((a) => a >= cur)
        );
        path.pop();
        cur = temp;
      }
    };
    backtracking([], 0, times);
    console.log(Math.max(...ans));
    rl.close(); // 关闭输入流
  }
});
