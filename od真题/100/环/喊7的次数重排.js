const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (countsStr) => {
  let counts = countsStr.split(" ").map(Number);
  let totalPass = counts.reduce((sum, count) => sum + count, 0);
  let numberOfPeople = counts.length;
  let peopleCounts = new Array(numberOfPeople).fill(0);

  let currentNumber = 1;
  let currentIndex = 0;
  while (totalPass > 0) {
    if (currentNumber % 7 === 0 || currentNumber.toString().includes("7")) {
      totalPass--;
      peopleCounts[currentIndex]++;
    }
    currentNumber++;
    currentIndex = (currentIndex + 1) % numberOfPeople;
  }

  const result = peopleCounts.join(" ");
  console.log(result);

  rl.close();
});

