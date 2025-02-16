const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (target) => {
  rl.on("line", (str) => {
    const arr = str.split(' ')
    let index =0
    const ans = []
    while(index < arr.length){
      if(arr[index] === target && !ans.length){
        const length = Number(arr[index+1][1])
        for(let i = index+3;i<index+3+length;i++){
          ans.push(arr[i])
        }
        index += 3 +length
      }else {
        const length = Number(arr[index+1][1])
        index = index + 3 +length
      }
    }
    console.log(ans.join(' '))
  });
});
