const readline = require("readline");

// 创建readline接口，用于读取输入
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputLines = [];
// 当接收到一行输入时，将其添加到inputLines数组
rl.on("line", (line) => {
  const arr = line.split(",").map(Number);
  const max = Math.max(...arr)
  if (arr.indexOf(2) >= 0 && arr.indexOf(5) >= 0) {
    console.log(-1);
    return;
  }
  if (arr.indexOf(6) >= 0 && arr.indexOf(9) >= 0) {
    console.log(-1);
    return;
  }
  const map = {
    2: 5,
    5: 2,
    6: 9,
    9: 6,
  };
  const extra = [];
  arr.map((i) => {
    if (map[i]) {
      extra.push(map[i]);
    }
  });
  const prefix = [...arr, ...extra];
  const ans = [];
  const backtraking = (cur, curArr) => {
    if(cur.length>0){
      ans.push(cur.join(''));
    }
    if (curArr.length === 0) {
      return;
    }
    for (let i = 0; i < curArr.length; i++) {
      cur.push(curArr[i]);
      const newArr = [...curArr]
      newArr.splice(i,1)
      backtraking(cur, newArr);
      cur.pop();
    }
  };
  backtraking([],prefix)
  const res = ans.map(Number).sort((a,b)=>a-b)
    console.log(res[max])
  console.log(res[max-1])
});
