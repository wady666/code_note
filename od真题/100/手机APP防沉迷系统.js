const readline = require("readline");
// 创建readline接口实例
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 用于存储输入行的数组
const lines = [];
// 读取输入
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  // 当输入完成后开始处理数据
  processInput(lines);
});

// 处理输入数据的函数
function processInput(lines) {
  const n = parseInt(lines.shift()); // 读取App数量
  const apps = []; // 创建App列表，用于存储所有App

  for (let i = 0; i < n; i++) {
    // 循环读取每个App的信息，并创建App对象添加到列表中
    const [appName, appPriority, appStartTime, appEndTime] = lines
      .shift()
      .split(" ");
    apps.push({
      name: appName,
      appPriority: parseInt(appPriority),
      startTime: convertTime(appStartTime),
      endTime: convertTime(appEndTime),
    });
  }

  const queryTime = convertTime(lines.shift()); // 读取查询时间，并转换为分钟
  let appAtTime = "NA"; // 初始化查询时间对应的App名称为"NA"

  // 创建已注册App列表
  const registeredApps = [];
  for (const app of apps) {
    if (app.appStartTime > app.appEndTime) {
      continue;
    }
    for (let i = 0; i < registeredApps.length; i++) {
      const registedAPP = registeredApps[i];
      if (
        Math.max(app.startTime, registedAPP.startTime) <
        Math.min(app.endTime, registedAPP.endTime)
      ) {
        if(app.appPriority > registedAPP.appPriority){
          registeredApps.splice(i,1)
        }else {
          continue;
        }
      }
    }
    registeredApps.push(app);
  }

  // 遍历已注册App列表，找到查询时间对应的App
  for (const app of registeredApps) {
    if (queryTime >= app.startTime && queryTime < app.endTime) {
      appAtTime = app.name; // 更新查询时间对应的App名称
      break; // 找到后退出循环
    }
  }

  console.log(appAtTime); // 输出查询时间对应的App名称
}

// 时间转换函数，将时间字符串转换为以分钟为单位的整数
function convertTime(time) {
  const [hours, minutes] = time.split(":").map(Number); // 将时间字符串按照":"分割并转换为数字
  return hours * 60 + minutes; // 将小时和分钟转换为分钟
}