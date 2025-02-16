const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line1) => {
  rl.on("line", (line2) => {
    const arr1 = line1.split(";").map((item) => item.split(","));
    const arr2 = line2.split(";").map((item) => item.split(","));
    const obj = {};
    const ans = [];
    for (let i = 0; i < arr2.length; i++) {
      let cur = arr2[i][0];
      let grade = arr2[i][1];
      arr1.map((item) => {
        if (item[0] === arr2[i][0]) {
          // 得到信息表
          ans.push({
            class: cur.slice(0, 5),
            xuehao: cur,
            grade: Number(grade) + Number(item[1]),
          });
        }
      });
    }
    if (ans.length === 0) {
      console.log("NULL");
      return;
    }
    // 信息表排序
    ans.sort((a, b) => {
      if (a["class"] === b["class"]) {
        return b["grade"] - a["grade"];
      } else {
        return a["class"] - b["class"];
      }
    });
    ans.map((kv) => {
      if (obj[kv["class"]]) {
        obj[kv["class"]].push(kv["xuehao"]);
      } else {
        obj[kv["class"]] = [kv["xuehao"]];
      }
    });
    for (let key in obj) {
      console.log(key);
      // 去重
      console.log(Array.from(new Set(obj[key])).join(";"));
    }
  });
});
