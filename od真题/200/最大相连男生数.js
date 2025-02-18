const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
let row = 0,
  col = 0;
const getMaxLine = (i, j) => {
  let maxLen = 1;
  let temp = 0;
  let preI = i,
    preJ = j;
  // 水平检查
  for (; j < col; j++) {
    if (lines[i][j] === "M") {
      temp++;
    }
  }
  maxLen = Math.max(temp, maxLen);
  temp = 0;
  i = preI;
  j = preJ;
  // 垂直检查
  for (; i < row; i++) {
    if (lines[i][j] === "M") {
      temp++;
    }
  }
  maxLen = Math.max(temp, maxLen);
  temp = 0;
  i = preI;
  j = preJ;
//   // 正对角线检查
  for (; i < row && j < col; j++) {
    if (lines[i][j] === "M") {
      temp++;
    }
    i++;
  }
  maxLen = Math.max(temp, maxLen);
  temp = 0;
  i = preI;
  j = preJ;
  // 反对角线检查
  for (; i < row && j >= 0; i++) {
    if (lines[i][j] === "M") {
      temp++;
    }
    j--;
  }
  maxLen = Math.max(temp, maxLen);
  temp = 0;
  i = preI;
  j = preJ;
  return maxLen;
};
rl.on("line", (line) => {
  lines.push(line);
  if (lines.length === 1) {
    let [a, b] = line.split(","); // 读取n和m，n代表菜的个数，m代表手速
    row = parseInt(a);
    col = parseInt(b);
  }
  if (row > 0 && lines.length === row + 1) {
    // 当读取的行数等于n+1时，开始处理数据
    lines.shift(); // 移除第一行，因为已经读取了n和m
    let max = 0;
    lines = lines.map((i) => i.split(","));
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (lines[i][j] === "M") {
          max = Math.max(getMaxLine(i, j), max);
        }
      }
    }
    console.log(max);
    rl.close(); // 关闭输入流
  }
});
