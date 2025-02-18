const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let line = [];
rl.on("line", (input) => line.push(input)).on("close", () => {
  const [N, E] = line[0].split(" ").map(Number);
  let t = new Array(N).fill(10000); //用来记录每个发动机的启动时刻;时间设为极大值，表示起始都没有启动
  let queue = []; //BFS队列
  for (let i = 1; i <= E; i++) {
    const [T, P] = line[i].split(" ").map(Number);
    t[P] = T;
    queue.push([T, P]); //入队列
  }
  while (queue.length > 0) {
    let [time, position] = queue.shift(); //第一个出队列
    let neighbors = [(position + 1) % N, (position - 1 + N) % N];
    for (let i = 0; i < neighbors.length; i++) {
      if (t[neighbors[i]] > time + 1) {
        t[neighbors[i]] = time + 1; //手动时间大于自动启动，将时间改为自动启动或者是时间还是极大值时（还未启动的）
        queue.push([t[neighbors[i]], neighbors[i]]);
      }
    }
  }
  let maxTime = Math.max(...t);
  let lastStartNum = 0;
  let lastStartIndex = "";
  for (let i = 0; i < N; i++) {
    if (maxTime === t[i]) {
      lastStartNum++;
      lastStartIndex += i.toString() + " ";
    }
  }
  console.log(lastStartNum);
  console.log(lastStartIndex.substring(0, lastStartIndex.length - 1));
});
