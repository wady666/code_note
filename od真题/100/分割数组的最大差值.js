 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (length) => {
  rl.on('line', (numbers) => {
    numbers = numbers.split(' ').map(Number);

    // 计算前缀和
    let prefixSum = new Array(length);
    prefixSum[0] = numbers[0];
    for (let i = 1; i < length; i++) {
      prefixSum[i] = prefixSum[i-1] + numbers[i];
    }

    // 差值的最大取值
    let maxDifference = 0;

    // 计算差值的最大取值
    for (let i = 0; i < length - 1; i++) {
      let leftSum = prefixSum[i];
      let rightSum = prefixSum[length-1] - prefixSum[i];
      let difference = Math.abs(leftSum - rightSum);
      maxDifference = Math.max(maxDifference, difference);
    }

    // 输出差值的最大取值
    console.log(maxDifference);

    rl.close();
  });
});

