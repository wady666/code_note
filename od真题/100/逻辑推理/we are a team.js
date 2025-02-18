const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 查找节点，用于判断两个人是否在同一个团队
function find(x, parent) {
  if (parent[x] !== x) {
    parent[x] = find(parent[x], parent);
  }
  return parent[x];
}

let inputLines = [];
rl.on('line', (input) => {
  inputLines.push(input);
}).on('close', () => {
  const [numPeople, numMessages] = inputLines[0].split(' ').map(Number);
  const messages = inputLines.slice(1).map(line => line.split(' ').map(Number));

  // 检查输入范围，如果超出范围则输出 "Null"
  if (numPeople < 1 || numPeople >= 100000 || numMessages < 1 || numMessages >= 100000) {
    console.log('Null');
    return;
  }

  // 初始化数组，用于存储每个人的团队信息
  const parent = Array.from({ length: numPeople + 1 }, (_, i) => i);

  // 遍历消息，根据指令处理团队关系
  for (const message of messages) {
    const [personA, personB, command] = message;

    // 检查输入范围，如果超出范围则输出 "da pian zi"
    if (personA < 1 || personA > numPeople || personB < 1 || personB > numPeople) {
      console.log('da pian zi');
      continue;
    }

    // 如果指令为 0，则合并 personA 和 personB 所在的团队
    if (command === 0) {
      const rootA = find(personA, parent);
      const rootB = find(personB, parent);

      if (rootA !== rootB) {
        parent[rootB] = rootA;
      }
    }
    // 如果指令为 1，则判断 personA 和 personB 是否在同一个团队
    else if (command === 1) {
      console.log(find(personA, parent) === find(personB, parent) ? 'We are a team' : 'We are not a team');
    }
    // 如果指令为其他值，则输出 "da pian zi"
    else {
      console.log('da pian zi');
    }
  }
});

