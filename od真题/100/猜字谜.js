// 导入 readline 模块，用于从标准输入读取数据
const readline = require("readline");

// 创建 readline 接口实例，用于处理输入输出
const rl = readline.createInterface({
  input: process.stdin, // 指定标准输入流
  output: process.stdout, // 指定标准输出流
});

// 监听第一个输入行，即谜面单词列表
rl.on("line", (puzzleInput) => {
  // 监听第二个输入行，即谜底库单词列表
  rl.on("line", (answerBankInput) => {
    // 将谜面单词列表按照逗号分隔成数组
    const puzzles = puzzleInput.split(",");
    // 将谜底库单词列表按照逗号分隔成数组
    const answerBank = answerBankInput.split(",");
    // 用于存储匹配到的正确单词
    const matchedAnswers = [];

    for (let i = 0; i < puzzles.length; i++) {
      let uniq = new Set(puzzles[i]);
      let charArray = Array.from(uniq)
      charArray.sort();
      // 将排序好的数组转换为字符串
      puzzles[i] = charArray.join("");
    }

    for (let i = 0; i < answerBank.length; i++) {
      let uniq = new Set(answerBank[i]);
      let charArray = Array.from(uniq)
      charArray.sort();
      // 将排序好的数组转换为字符串
      if(puzzles.includes(charArray.join(""))){
        matchedAnswers.push(answerBank[i])
      }
    }
    if(matchedAnswers.length){
        console.log(matchedAnswers.join(','))
    }else {
        console.log('not')
    }

    rl.close(); // 关闭 readline 接口
  });
});
