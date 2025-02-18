// 导入模块
const readline = require("readline");

// 创建接口，用于读取用户输入
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 主函数
rl.on("line", (memoryInfo) => {
  rl.on("line", (applyList) => {
    // 内存信息
    let memoryList = []; // 创建一个数组用于存储内存池
    let memoryInfoList = memoryInfo.split(","); // 按逗号分割内存池信息
    memoryInfoList.forEach((info) => {
      let [size, count] = info.split(":").map(Number); // 提取内存块大小和数量
      for (let i = 0; i < count; i++) {
        memoryList.push(size); // 根据数量添加到内存池数组
      }
    });

    // 排序内存池，优先从小到大分配更精准的内存
    memoryList.sort((a, b) => a - b);

    // 申请信息
    let applyMemoryList = applyList.split(",").map(Number); // 将申请列表按逗号分割并转为数字数组

    // 分配内存
    let resultList = []; // 存储每次申请是否成功的结果
    applyMemoryList.forEach((applyMemory) => {
      let flag = false; // 标志位：是否成功分配
      for (let i = 0; i < memoryList.length; i++) {
        if (memoryList[i] >= applyMemory) {
          flag = true; // 设置标志位为 True
          memoryList.splice(i, 1); // 从内存池中移除已分配的内存块
          break; // 跳出循环
        }
      }
      resultList.push(flag); // 添加分配结果
    });

    // 输出结果
    console.log(resultList.join(",")); // 输出结果，用逗号分隔

    rl.close();
  });
});

