const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];
let i = 0;
rl.on("line", (input) => {
  if (i === 0) {
    n = parseInt(input);
  } else if (i <= n) {
    arr.push(input.split(","));
  } else {
    let target = input;
    const firstLoc = [];
    const arrFlag = Array.from(Array(n), () => Array(n).fill(false));
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        if (arr[i][j] === target[0]) {
          firstLoc.push([i, j]);
        }
      }
    }
    const backtracking = (i, j, index, path) => {
      // 边界处理、不符合条件处理、已访问过的路径处理
      if (
        i < 0 ||
        j < 0 ||
        i >= n ||
        j >= n ||
        arrFlag[i][j] ||
        target[index] !== arr[i][j]
      ) {
        return;
      }
      path.push([i, j]);
      arrFlag[i][j] = true;
      if (index === target.length - 1) {
        return path;
      }
      const dir = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ];
      for (const d of dir) {
        const res = backtracking(d[0] + i, d[1] + j, index + 1, path);
        if (res) {
          return res;
        }
      }
      arrFlag[i][j] = false;
      path.pop();
      return;
    };
    let ans = [];
    firstLoc.map((item) => {
      const res = backtracking(item[0], item[1], 0, []);
      if (res) {
        ans.push(...res);
      }
    });
    if (ans.length) {
      console.log(ans.map((item) => item.join(",")).join(","));
    } else {
      console.log("N");
    }
  }
  i++;
});
