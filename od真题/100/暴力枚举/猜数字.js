// 引入readline库，用于从标准输入读取数据
const readline = require('readline');
// 创建readline接口实例
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 定义变量n来存储猜测的总数
let n;
// 定义数组来存储每次的猜测数字和结果
let guessInfos = [];

// 监听行输入事件
rl.on('line', (line) => {
  if (!n) {
    // 如果n未定义，读取第一行作为猜测总数
    n = parseInt(line.trim());
  } else {
    // 否则读取猜测数字和相应的结果，并存入guessInfos数组
    const [guessNum, guessResult] = line.split(' ');
    guessInfos.push([guessNum, guessResult]);
    if (guessInfos.length === n) {
      // 当读取完所有数据后关闭接口
      rl.close();
    }
  }
});

// 监听关闭事件，开始处理数据
rl.on('close', () => {
  // 用于记录符合条件的答案数量
  let validCount = 0;
  // 用于存储有效的答案
  let validAnswer = '';

  // 遍历0000到9999所有可能的答案
  for (let num = 0; num <= 9999; num++) {
    const answer = num.toString().padStart(4, '0');
    let isValid = true;

    // 遍历所有的猜测信息
    for (const [guess, expectResult] of guessInfos) {
      let countA = 0; // 位置和数字都正确的数量
      let countB = 0; // 数字正确但位置错误的数量
      // 初始化数字出现频次的数组
      const answerArr = new Array(10).fill(0);
      const guessArr = new Array(10).fill(0);

      // 对每个位置的数字进行比较
      for (let i = 0; i < guess.length; i++) {
        const c1Int = parseInt(guess[i]);
        const c2Int = parseInt(answer[i]);

        if (c1Int === c2Int) {
          countA++;
        } else {
          guessArr[c1Int]++;
          answerArr[c2Int]++;
        }
      }

      // 计算位置不正确但数字正确的数量
      for (let i = 0; i < 10; i++) {
        countB += Math.min(answerArr[i], guessArr[i]);
      }

      // 构造实际结果字符串
      const realResult = `${countA}A${countB}B`;

      // 如果实际结果与预期结果不匹配，该答案无效
      if (realResult !== expectResult) {
        isValid = false;
        break;
      }
    }

    // 如果该答案有效，记录下来
    if (isValid) {
      validCount++;
      validAnswer = answer;

      // 如果找到多于一个有效答案，则停止搜索
      if (validCount > 1) {
        break;
      }
    }
  }

  // 根据有效答案数量输出结果
  if (validCount !== 1) {
    console.log('NA');
  } else {
    console.log(validAnswer);
  }
});

