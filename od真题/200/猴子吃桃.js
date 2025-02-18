const readline = require("readline");
// 创建 readline 接口实例
const rl = readline.createInterface({
  input: process.stdin, // 标准输入流
  output: process.stdout, // 标准输出流
});

rl.on("line", (tree) => {
  rl.on("line", (time) => {
    const arr = tree.split(" ").map(Number);
    time = Number(time);
    const getEatTime = (speed) => {
      let ans = 0;
      for(let t of arr){
        ans += Math.ceil(t/speed)
      }
      return ans
    };
    for (let i = 1; i <= Math.max(...arr); i++) {
      if(getEatTime(i) <= time){
        console.log(i)
        return
      }
    }
    console.log(0)
    // 关闭 readline 接口实例
    rl.close();
  });
});

