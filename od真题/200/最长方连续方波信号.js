const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let flag = 0;
  let fast=0;
  let ans = ''
  while(fast<line.length){
    if(line[fast] === '0'){
      let cur = '0' 
      while(fast + 2 < line.length && line.substring(fast+1,fast+3) === '10'){
        cur += '10'
        fast += 2
      }
      if(fast+1<line.length && line[fast+1] === '0'){
        ans = cur.length > ans.length ? cur : ans;
      }
    }
    fast++
  }
  console.log(ans)
});