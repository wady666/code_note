const readline = require("readline");
// 创建 readline 接口实例
const rl = readline.createInterface({
  input: process.stdin, // 标准输入流
  output: process.stdout, // 标准输出流
});

rl.on("line", (str) => {
  let ans = "";
  let num = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[0-9]/) && i < str.length - 1) {
      num += str[i];
    } else if (str[i].match(/[a-z]/)) {
      if (Number(num) > 2) {
        for (let j = 0; j < Number(num); j++) {
          ans += str[i];
        }
      } else if (num === "") {
        ans += str[i];
      } else {
        console.log("!error");
        return
      }
      num = ''
    } else {
      console.log("!error");
      return;
    }
  }
  console.log(ans);
});
