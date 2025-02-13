// 引入readline模块用于读取命令行输入
const readline = require("readline");

// 创建readline接口实例
const rl = readline.createInterface({
  input: process.stdin, // 标准输入流
  output: process.stdout, // 标准输出流
});
let lines = []; // 存储输入行的数组

const handleRecord = (attendanceRecords) => {
  let abs = 0;
  let any = 0;
  for (let i = 0; i < attendanceRecords.length; i++) {
    if (attendanceRecords[i] === "absent") {
      abs++;
      if (abs > 1) {
        return false;
      }
    }
    if (["late", "leaveearly"].includes(attendanceRecords[i])) {
      if (i > 0 && ["late", "leaveearly"].includes(attendanceRecords[i - 1])) {
        return false;
      }
    }
    if (attendanceRecords[i] !== "present") {
      any++;
    }
    if (i > 6) {
      if (attendanceRecords[i - 6] === "present") {
        any--;
      }
      if (any > 3) {
        return false;
      }
    }
  }
  return true;
};
// 监听命令行输入
rl.on("line", (line) => {
  lines.push(line); // 将每行输入存储到lines数组中
}).on("close", () => {
  // 输入结束时触发
  const testCases = parseInt(lines[0], 10); // 解析测试用例数量
  const ans = [];
  for (let i = 1; i <= testCases; i++) {
    // 遍历每个测试用例
    const attendanceRecords = lines[i].trim().split(" "); // 分割考勤记录
    ans.push(handleRecord(attendanceRecords));
  }
  console.log(ans.join(" "));
  process.exit(0); // 执行完毕后退出程序
});
