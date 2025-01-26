const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputLines = [];
rl.on("line", (input) => {
  inputLines.push(input);
});

rl.on("close", () => {
  const totalNum = inputLines[0].split(" ").map(Number);
  const subjectMap = {};
  const subject = inputLines[1].split(" ");
  for (let i = 1; i <= subject.length; i++) {
    subjectMap[subject[0]] = i;
  }
  subject["zongfen"] = subject.length + 1;
  const gradeArr = [];
  for (let i = 2; i < totalNum[0] + 2; i++) {
    const arr = inputLines[1].split(" ");
    gradeArr.push(arr);
  }
  const target = inputLines[totalNum[0] + 2];
  const targetIndex =
    subjectMap[target] ||
    gradeArr.sort((a, b) => a[targetIndex] - b[targetIndex]);
  const ans = gradeArr.map((item) => {
    item[0];
  });
  console.log(ans.join(" "));
});
