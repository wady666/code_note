const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (index) => {
  rl.on("line", (input) => {
    const charArray = input.split("");
    let curStr = "";
    let strArr = [];
    for (let i = 0; i < charArray.length; i++) {
      const char = charArray[i];
      if (curStr.includes('"') && char === '"') {
        curStr += char;
        strArr.push(curStr);
        curStr = "";
      } else if (char === "_" && !curStr.includes('"')) {
        if (curStr !== "") {
          strArr.push(curStr);
          curStr = "";
        }
      } else if (i === charArray.length - 1) {
        curStr += char;
        strArr.push(curStr);
        curStr = "";
      } else {
        curStr += char;
      }
    }
    if (index >= strArr.length) {
      console.log("ERROR");
    } else {
      strArr[index] = "******";
      console.log(strArr.join("_"));
    }
    rl.close();
  });
});
