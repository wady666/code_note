// 导入readline模块
const readline = require("readline");
// 创建一个readline接口实例
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 当接收到一行输入时，执行以下操作
rl.on("line", (str) => {
  let [list, n] = str.split(" ");
  n = Number(n);
  let map = new Map();
  for (let i = 0; i < list.length; i++) {
    map.set(
      Number(list[i]),
      map.has(Number(list[i])) ? map.get(Number(list[i])) + 1 : 1
    );
  }
  for (let i = 0; i < 1000 - n; i++) {
    let isMatch = true;
    let newMap = new Map();
    for (let startIndex = i; startIndex < i + n; startIndex++) {
      const str = startIndex + "";
      for (const s of str) {
        newMap.set(
          Number(s),
          newMap.has(Number(s)) ? newMap.get(Number(s)) + 1 : 1
        );
      }
    }
    for (const k of map.keys()) {
      if (!newMap.has(k) || newMap.get(k) - map.get(k) !== 0) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      console.log(i);
      return;
    }
  }
  rl.close();
});
