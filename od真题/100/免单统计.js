const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 创建数组用于存储输入行
const lines = [];

// 读取输入行
rl.on("line", (line) => {
  lines.push(line);
});

// 当输入结束时，处理输入数据
rl.on("close", () => {
  const n = Number(lines.shift());
  const map = new Map();
  lines.map((item) => {
    let [sec, cent] = item.split(".");
    cent = Number(cent);
    map.set(sec, map.has(sec) ? [...map.get(sec), cent] : [cent]);
  });
  let times = 0;
  let arr = Array.from(map).map((item) => item[1]);
  let ans = arr.map((subArr) => {
    let min = Math.min(...subArr);
    return subArr.filter((i) => i === min);
  });
  ans.map((a)=>{
    times+=a.length
  })
  console.log(times)
});
