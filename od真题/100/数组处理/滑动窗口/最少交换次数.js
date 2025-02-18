const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (list) => {
  rl.on("line", (target) => {
    const arr = list.split(" ").map(Number);
    target = Number(target)
    let len = arr.filter((num) => num < Number(target)).length;
    let max = 0
    for(let slow =0;slow<arr.length-len;slow++){
      let count = 0
      for(let i =slow;i<slow+len;i++){
        if(arr[i]<target){
          count++
        }
      }
      max = Math.max(count,max)
    }
    console.log(len - max)
  });
});

// 移动窗口：当前窗口差多少个 就交换多少次