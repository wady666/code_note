const readline = require("readline");

// 创建读取接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 读取输入
rl.on("line", (input) => {
  // let [n, e] = inputs[0].split(' ').map(Number); // 解析发动机的总个数和手动启动的总个数

  let n = 8; //发动机总个数
  let e = 2; // 手动启动

  let launches = new Array(n).fill(1001); // 初始化每个发动机的启动时刻为极大值

  let queue = [
    [0, 2],
    [0, 6],
  ]; // [手动打开的时刻,编号]

  for (let i = 0; i < queue.length; i++) {
    launches[queue[i][1]] = launches[queue[i][0]];
  }
  while (queue.length >= 0) {
    let [time, position] = queue.shift();
    let neighbors = [(position + 1) % n, (position - 1 + n) % n];
    for (let i = 0; i < neighbors.length; i++) {
      if (launches[neighbors[i]] > time + 1) {
        launches[neighbors[i]] = time + 1;
        queue.push([launches[neighbors[i]], neighbors[i]]);
      }
    }
  }

  const maxTime = Math.max(...launches);
  let total = 0;
  let index = [];
  for (let i = 0; i < launches.length; i++) {
    if (launches[i][0] === maxTime) {
      index.push(launches[i][1]);
      total++;
    }
  }
  console.log(total, index);
  rl.close();
});
