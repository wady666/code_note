const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.on("line", (str) => {
  rl.on("line", (target) => {
    const seperator = /[, '.]/
    const arr = str.split(seperator)
    const ans = []
    for(let i=0;i<arr.length;i++){
        if(arr[i].length >= target.length){
            if(target === arr[i].substring(0,target.length)){
                ans.push(arr[i])
            }
        }
    }
    if(ans.length){
    console.log(ans.sort().join(' '))
    }else {
        console.log(target)
    }
  });
});