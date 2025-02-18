const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (x) => {
  let count = 0;

  // 循环直到只剩一颗糖果
  for (let i = x; i !== 1; i /= 2, count++) {
     // 当剩余糖果数量为3时，需要特殊处理
    if (i === 3) {
      count += 2; // 取出一个糖果，分给同学们，再放回一个糖果
      break;
    }
    // 当剩余糖果数量为奇数时，需要进行调整
    if (i % 2 !== 0) {
      // 如果将剩余糖果数量加1再除以2后是偶数，则取出一个糖果
      let T = ((Number(i) + 1) / 2) % 2;
 
      if (T === 0) {
        i++;
      } else { // 否则放回一个糖果
        i--;
      }
      count++;
    }
  }

  console.log(count);

  rl.close();
});


