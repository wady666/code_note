const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines = [];
let n, m;

rl.on('line', (line) => {
  lines.push(line);

  if (lines.length === 2) {
    n = parseInt(lines[0]);
    m = parseInt(lines[1]);
  }

  if (n && lines.length === n + 2) {
    const matrix = lines.slice(2).map(line => line.split(' ').map(Number));
    const posMap = {};

    // 记录每个数字出现的位置
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        const num = matrix[i][j];
        if (!posMap[num]) posMap[num] = [];
        posMap[num].push([i, j]);
      }
    }

    const result = Array.from({ length: n }, () => Array(m).fill(-1));

    // 遍历矩阵，计算最近的相同元素的距离
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        const num = matrix[i][j];
        const positions = posMap[num];

        if (positions.length > 1) {
          result[i][j] = findMinDistance(positions, i, j);
        }
      }
    }

    
    console.log(JSON.stringify(result).replace(/,/g, ", "));
    rl.close();
  }
});

// 计算当前位置到相同数字最近元素的曼哈顿距离
function findMinDistance(positions, x, y) {
  let minDist = Infinity;
  for (const [px, py] of positions) {
    if (px !== x || py !== y) {
      const dist = Math.abs(px - x) + Math.abs(py - y);
      minDist = Math.min(minDist, dist);
    }
  }
  return minDist;
}

