const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (list) => {
  let [num, rows] = list.split(" ").map(Number);
  let cols = Math.ceil(num / rows);
  const ans = Array.from({ length: rows }, () => Array(cols).fill("*"));
  let index = 1;
  let left = 0,
    right = cols - 1,
    top = 0,
    bottom = rows - 1;
  while (index <= num) {
    // 上边界
    for (let i = left; i <= right && index <= num; i++) {
      ans[top][i] = index++;
    }
    top++;
    // 右边界
    for (let i = top; i <= bottom && index <= num; i++) {
      ans[i][right] = index++;
    }
    right--;
    // 下边界
    for (let i = right; i >= left && index <= num; i--) {
      ans[bottom][i] = index++;
    }
    bottom--;
    // 左边界
    for (let i = bottom; i >= top && index <= num; i--) {
      ans[i][left] = index++;
    }
    left++;
  }
  ans.map((item) => {
    console.log(item.join(" "));
  });
  readline.close();
});
