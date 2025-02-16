const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const target = Number(line);
  if(target <= 1 || target > 100){
    console.log('ERROR!')
    return
  }
  let i = 1;
  const path = new Array(100).fill(0).map(() => {
    return i++;
  });
  const backtracking = (path,target)=>{
    if(path.length < target){
      return path
    }
    return backtracking([...path.slice(target),...path.slice(0,target-1)],target)
  }
  const ans = backtracking(path,target)
  console.log(ans.sort((a,b)=> Number(a)-Number(b)).join(','))
});
