const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// 函数：检查一个数是否为素数
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i ++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

readline.on('line', num => {
  num = Number(num);
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      let j = num / i;
      // 检查 i 和 j 是否都是素数
      if (isPrime(i) && isPrime(j)) {
        console.log(i < j ? i + " " + j : j + " " + i);
        return;
      }
    }
  }
  console.log("-1 -1");
  readline.close();
});


