const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let length, width, stationSide, minPower;
const lines = [];

rl.on("line", (line) => {
  lines.push(line);

  if (lines.length === 1) {
    [length, width, stationSide, minPower] = lines[0].split(" ").map(Number);
  }

  if (length && lines.length === length + 1) {
    const matrix = lines.slice(1).map(line => line.split(" ").map(Number));
    let ans = 0;

    for (let i = stationSide; i <= length; i++) {
      for (let j = stationSide; j <= width; j++) {
        let square = 0;
        for (let x = i - stationSide; x < i; x++) {
          for (let y = j - stationSide; y < j; y++) {
            square += matrix[x][y];
          }
        }
        if (square >= minPower) {
          ans += 1;
        }
      }
    }

    console.log(ans);
    rl.close();
  }
});

