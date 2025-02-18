const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (str) => {
  rl.on("line", (n) => {
    n = Number(n);
    const arr = str.split(",");
    const newArr = arr
      .map((item) => {
        return item.split("-").map(Number);
      })
      .sort((a, b) => a[0] - b[0]);

    const ans = newArr.flatMap(subArr => {
      if (subArr.length === 1) {
        return subArr[0] === n ? [] : [subArr];
      }
  
      if (subArr.length === 2) {
        const [start, end] = subArr;
        if (start <= n && n <= end) {
          const leftInterval = [start, n-1]; 
          const rightInterval = [n+1, end];  
          const result = [];
          if (leftInterval[0] <= leftInterval[1]) {
            result.push(leftInterval[0] === leftInterval[1] ? [leftInterval[0]] : leftInterval);
          }
          if (rightInterval[0] <= rightInterval[1]) {
            result.push(rightInterval[0] === rightInterval[1] ? [rightInterval[0]] : rightInterval);
          }
          return result;
        }
      }
      // 其他情况保留原区间
      return [subArr];
    });
    console.log(ans.map((item)=>item.join('-')).join(','));
  });
});
