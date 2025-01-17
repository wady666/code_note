let str = "qququaauqccauqkkcauqqkcauuqkcaaukccakkck";
let ans = 0;

for (let i = 4; i < str.length; i++) {
  if (str.substring(i - 4, i) === "quack") {
    ans++;
  }
}
return ans === 0 ? -1 : ans;
