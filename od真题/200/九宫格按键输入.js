const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (str) => {
  // 九宫格枚举信息
  const map = new Map();
  map.set("0", " ");
  map.set("1", ",.");
  map.set("2", "abc");
  map.set("3", "def");
  map.set("4", "ghi");
  map.set("5", "jkl");
  map.set("6", "mno");
  map.set("7", "pqrs");
  map.set("8", "tuv");
  map.set("9", "wxyz");

  let res = "";
  // 默认是数字模式
  let isNumber = true

  for (let i = 0; i < str.length; i++) {
    const s = str[i];
    if (s.match(/[0-9]/)) {
      if (isNumber) {
        res += s;
      } else {
        let count = 0;
        while (i < str.length - 1 && str[i + 1] === s) {
          count++;
          i++
        }
        res += map.get(s)[count % map.get(s).length];
      }
    }else if(s ==='#'){
      isNumber = !isNumber
    }
  }
  console.log(res); // 输出结果
});
