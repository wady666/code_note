const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (numbersInput) => {
  const numbers = numbersInput.split(' ').map(Number); // 将输入的字符串分割并映射为整数数组
  const length = numbers.length; // 获取数组的长度
  const result = []; // 用于存储所有可能的步数结果

  for (let i = 1; i < Math.floor(length / 2); i++) { // 遍历所有从第一个元素开始的有效步长
    let step = 1; // 初始化步数为1，因为第一步已经走出
    let index = i; // 将索引设为当前步长

    while (index < length - 1) { // 只要没有走到数组的最后一个元素
      index += numbers[index]; // 按照当前索引位置的数字值前进
      step++; // 每走一步，步数加1
    }

    if (index === length - 1) { // 如果恰好到达数组的最后一个元素
      result.push(step); // 将步数结果存入结果列表
    }
  }

  if (result.length > 0) {
    result.sort(); // 对步数结果进行排序
    console.log(result[0]); // 输出最小的步数
  } else {
    console.log(-1); // 如果没有结果，输出-1
  }

  rl.close();
});
