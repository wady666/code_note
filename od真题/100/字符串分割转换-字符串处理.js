const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (k) => {
  rl.on("line", (s) => {
    k = Number(k)
    const arr = s.split("-");
    const ans = [arr[0]];
    const newStr = arr.slice(1).join("");
    let startIndex = 0;
    const handleUpperOrLower = (str) => {
      let low = 0,
        up = 0;
      for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
          up++;
        } else if (charCode >= 97 && charCode <= 122) {
          low++;
        }
      }
      if (up > low) {
        return str.toUpperCase();
      } else if (up === low) {
        return str;
      } else {
        return str.toLowerCase();
      }
    };
    while (startIndex < newStr.length) {
      let endIndex = Math.min(startIndex + k, newStr.length);
      ans.push(handleUpperOrLower(newStr.substring(startIndex, endIndex)));
      startIndex += k;
    }
    console.log(ans.join("-"));
  });
});