const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n;
let coordinates = [];

// 判断两个点是否相等
function arePointsEqual(p1, p2) {
  return p1[0] === p2[0] && p1[1] === p2[1];
}

// 检查一个点是否存在于点数组中
function pointExists(points, p) {
  for (let point of points) {
    if (arePointsEqual(point, p)) {
      return true;
    }
  }
  return false;
}

rl.on('line', (line) => {
  if (n === undefined) {
    n = parseInt(line);
  } else {
    coordinates.push(line.split(' ').map(Number));
    if (coordinates.length === n) rl.close();
  }
});

rl.on('close', () => {
  let squareCount = 0;

  // 遍历所有点对，检查是否能构成正方形
  for (let i = 0; i < n; i++) {
    let [x1, y1] = coordinates[i];

    for (let j = i + 1; j < n; j++) {
      let [x2, y2] = coordinates[j];

      // 每两个点形成一条线 与这条线形成正方形的共可能有四个点，判断这四个点是否在输入里面
      // 计算两个可能的对角点
      let x3 = x1 - (y1 - y2), y3 = y1 + (x1 - x2);
      let x4 = x2 - (y1 - y2), y4 = y2 + (x1 - x2);

      if (pointExists(coordinates, [x3, y3]) && pointExists(coordinates, [x4, y4])) {
        squareCount++;
      }

      // 计算另外两个可能的对角点
      let x5 = x1 + (y1 - y2), y5 = y1 - (x1 - x2);
      let x6 = x2 + (y1 - y2), y6 = y2 - (x1 - x2);

      if (pointExists(coordinates, [x5, y5]) && pointExists(coordinates, [x6, y6])) {
        squareCount++;
      }
    }
  }

  // 每个正方形被计算了4次，因此结果需要除以4
  console.log(Math.floor(squareCount / 4));
});
