const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (list) => {
  const arr = list.split(" ").map(Number);
  const ans = [];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let index = (i + 1) % n;
    let gift = 0;
    while (index !== i) {
      if (arr[i] > arr[index]) {
        gift = arr[index]
        break;
      }
      index = (index+1) % n
    }
    ans.push(arr[i] + gift);
  }
  console.log(ans.join(' '));
  readline.close();
});
