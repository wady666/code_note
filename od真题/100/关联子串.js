// 导入readline模块
const readline = require("readline");
// 创建一个readline接口实例
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 当接收到一行输入时，执行以下操作
rl.on("line", (str) => {
  const [target,source] = str.split(' ')
  const afterSortTarget = target.split('').sort().join('')
  for(let i =0;i<=source.length-target.length;i++){
    const str = source.substring(i,i+target.length).split('').sort().join('')
    if(str === afterSortTarget){
      console.log(i)
      return
    }
  }
  console.log(-1)
  rl.close();
});

