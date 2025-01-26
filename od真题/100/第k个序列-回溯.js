const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (n) => {
  rl.on("line", (k) => {
    const ans = [];
    const backtracking = (path,used) => {
      if (path.length === Number(n)) {
        ans.push(path.slice());
        return;
      }
      for (let i = 1; i <= n; i++) {
        if (!used[i]) {
            path.push(i)
            used[i] = true
            backtracking(path,used)
            used[i] = false
            // 回溯时需弹出
            path.pop()
        }
      }
    };
    backtracking([],{})
    console.log(ans[Number(k)-1].join(""))
  });
});
