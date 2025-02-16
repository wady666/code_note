// 导入readline模块
const readline = require("readline");
// 创建一个readline接口实例
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 当接收到一行输入时，执行以下操作
rl.on("line", (input) => {
  const people = input.split(" ").map(Number);
  const ans = [];
  for (let person of people) {
    if(people<=0){
        console.log(-1)
        return
    }
    let alive = true;
    // 若为负数 则加入决斗
    while (alive && person < 0 && ans.length > 0 && ans[ans.length-1] >0) {
      // 决斗结果
      alive = ans[ans.length-1] < -person
      if(ans[ans.length-1] <= -person){
        person = person + ans[ans.length-1]
        ans.pop()
      }
    }
    if(alive) {
      ans.push(person)
    }
  }
  console.log(ans.length)
  rl.close();
});
