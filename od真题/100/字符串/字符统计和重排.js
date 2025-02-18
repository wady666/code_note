const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (str) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  const ans = [];
  for (const k in obj) {
    ans.push(`${k}:${obj[k]}`);
  }

  ans.sort((a, b) => {
    if (Number(b[2]) === Number(a[2])) {
      let strA =
        a[0].charCodeAt() <= 90 ? a[0].charCodeAt() + 100 : a[0].charCodeAt();
      let strB =
        b[0].charCodeAt() <= 90 ? b[0].charCodeAt() + 100 : b[0].charCodeAt();
      return strA - strB;
    } else {
      return Number(b[2]) - Number(a[2]);
    }
  });
  console.log(ans.join(";") + ";");
});
