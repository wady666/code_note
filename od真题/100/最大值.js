const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (str) => {
  const arr = str.split(' ')
  arr.sort((a,b)=>{
    return  Number(b+a) - Number(a+b) 
  })
  console.log(Number(arr.join('')))
});