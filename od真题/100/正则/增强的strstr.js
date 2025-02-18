const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (source) => {
  rl.on("line", (target) => {
    // 处理目标字符串，去除不必要的括号格式
    let targetStr = target;
    targetStr = targetStr.replace(/\[(.*?)\]/g, "[$1]");

    // 基于处理后的目标字符串创建正则表达式对象
    const regex = new RegExp(targetStr);

    // 使用正则表达式在源字符串中进行匹配操作
    const matchRes = regex.exec(source);

    // 根据匹配结果输出相应信息
    if (matchRes) {
      // 若匹配成功，输出匹配结果在源字符串中的起始索引
      console.log(matchRes.index);
    } else {
      // 若匹配失败，输出 -1
      console.log(-1);
    }

    // 关闭 readline 接口，结束输入读取
    rl.close();
  });
});



function processBrackets(target) {
    let result = '';
    let inBrackets = false;
    for (let i = 0; i < target.length; i++) {
        if (target[i] === '[') {
            inBrackets = true;
            result += '[';
        } else if (target[i] === ']') {
            inBrackets = false;
            result += ']';
        } else {
            result += target[i];
        }
    }
    return result;
}



rl.on('line', (source) => {
    rl.on('line', (target) => {
        target = processBrackets(target);
        const index = source.indexOf(target);

        if (index!== -1) {
            console.log(index);
        } else {
            console.log(-1);
        }

        rl.close();
    });
});