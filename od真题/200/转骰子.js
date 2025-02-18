// 定义一个通用的旋转函数，用于交换骰子上四个面的值
function rotate(state, a, b, c, d) {
  let temp = state[a];  // 临时保存第一个面的值
  state[a] = state[b];  // 第二个面的值赋给第一个面
  state[b] = state[c];  // 第三个面的值赋给第二个面
  state[c] = state[d];  // 第四个面的值赋给第三个面
  state[d] = temp;      // 第一个面的值赋给第四个面
}

// 定义向左翻转函数 (L)
function turnL(state) {
  rotate(state, 0, 4, 1, 5);  // 左->上->右->下->左
}

// 定义向右翻转函数 (R)
function turnR(state) {
  rotate(state, 0, 5, 1, 4);  // 左->下->右->上->左
}

// 定义向前翻转函数 (F)
function turnF(state) {
  rotate(state, 2, 4, 3, 5);  // 前->上->后->下->前
}

// 定义向后翻转函数 (B)
function turnB(state) {
  rotate(state, 2, 5, 3, 4);  // 前->下->后->上->前
}

// 定义逆时针旋转函数 (A)
function turnA(state) {
  rotate(state, 0, 3, 1, 2);  // 左->后->右->前->左
}

// 定义顺时针旋转函数 (C)
function turnC(state) {
  rotate(state, 0, 2, 1, 3);  // 左->前->右->后->左
}

// 主程序
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.on('line', s => {
  // 初始状态：左1，右2，前3，后4，上5，下6
  let state = [1, 2, 3, 4, 5, 6];

  // 遍历输入的每一个字符，根据指令执行相应的翻转或旋转操作
  for (let ch of s) {
      if (ch === 'L') turnL(state);
      else if (ch === 'R') turnR(state);
      else if (ch === 'F') turnF(state);
      else if (ch === 'B') turnB(state);
      else if (ch === 'A') turnA(state);
      else if (ch === 'C') turnC(state);
  }

  // 输出最终骰子的六个面状态
  console.log(state.join(''));

  readline.close();
});
