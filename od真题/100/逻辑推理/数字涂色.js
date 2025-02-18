const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (n) => {
  rl.on("line", (nums) => {
    const arr = nums.split(' ').map(Number).sort((a,b)=>a-b)
    const ans = []
    for(let i =0;i<arr.length;i++){
      if(ans.length === 0){
        ans.push(arr[i])
      }else {
        let isOldColor = ans.some((item)=>{
          return arr[i] % item === 0 
        })
        if(!isOldColor){
          ans.push(arr[i])
        }
      }
    }
    console.log(ans.length) 
  });
});