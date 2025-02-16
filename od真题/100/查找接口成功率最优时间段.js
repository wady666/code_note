const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (num) => {
  rl.on("line", (list) => {
    let arr = list.split(" ").map(Number);
    let sum = 0;
    let prefixSum = [];
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      prefixSum.push(sum);
    }
    let ans = [];
    let maxLen = 0;
    let slow = 0;
    let fast = 0;
    while (fast < prefixSum.length) {
      const len = fast - slow + 1;
      const sum =
        slow === 0
          ? prefixSum[fast]
          : (prefixSum[fast] - prefixSum[slow - 1]) ;
      if (sum/ len <= Number(num)) {
        if (len > maxLen) {
          maxLen = fast - slow + 1;
          ans = [];
          ans.push([slow, fast]);
        } else if (len === maxLen) {
          ans.push([slow, fast]);
        }
        fast++;
      } else {
        fast++;
        slow = fast;
      }
    }
    if(ans.length===0){
        console.log('NULL')
    }else {
    console.log(ans.map((item)=>item.join('-')).join(' '))
    }
  });
});