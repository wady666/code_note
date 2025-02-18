// 引入 readline 模块并创建接口用于读取来自标准输入（stdin）的数据
const rl = require("readline").createInterface({ input: process.stdin });

// 创建异步迭代器，用于按行读取输入
var iter = rl[Symbol.asyncIterator]();

// 定义一个异步函数用于读取一行输入
const readline = async () => (await iter.next()).value;

// 立即执行的异步函数，主逻辑在此执行
void (async function () {
    const chars = await readline();  // 读取一行输入数据（假设为大雁叫声的字符串）
    const quack = "quack";  // 定义标准的“大雁叫声”顺序
    const states = new Array(quack.length).fill(0);  // 初始化状态数组，用于跟踪每个字符的出现次数
    const dp = [];  // 动态规划数组，用于记录完成“quack”时大雁的数量
    let max_ = 0;  // 记录同时发出叫声的大雁的最大数量

    // 遍历输入的每一个字符
    for (let i = 0; i < chars.length; i++) {
        const index = quack.indexOf(chars[i]);  // 查找当前字符在“quack”中的位置
        if (index === -1) {  // 如果字符不在“quack”中，表示无效输入
            console.log(-1);  // 输出-1表示错误
            process.exit();  // 终止程序
        }

        if (index === 0) {  // 如果是“q”，表示一个新的大雁叫声的开始
            states[index] += 1;  // 更新状态数组，记录一个新“q”的出现
        } else {
            if (states[index - 1]) {  // 如果前一个字符的状态有效
                states[index - 1] -= 1;  // 前一个字符状态减1
                states[index] += 1;  // 当前字符状态加1
            }

            // 如果当前字符是“k”，表示一个完整的“quack”结束
            if (quack[quack.length - 1] === chars[i]) {
                if (states[states.length - 1] !== 0) {  // 确保有一个完整的“quack”
                    const temp = [...states];  // 复制当前状态数组
                    temp[states.length - 1] = 0;  // 重置最后一个字符的状态
                    max_ = Math.max(max_, temp.reduce((a, b) => a + b));  // 更新最大大雁数量

                    // 检查剩余的字符，尝试找到更多的完整“quack”
                    for (let j = i; j < chars.length; j++) {
                        const index = quack.indexOf(chars[j]);  // 查找字符位置
                        if (temp[index - 1]) {  // 如果前一个字符状态有效
                            temp[index - 1] -= 1;  // 前一个字符状态减1
                            temp[index] += 1;  // 当前字符状态加1
                        }
                        if (temp[temp.length - 1] === max_) {  // 如果达到最大大雁数量
                            break;  // 停止搜索
                        }
                    }
                    dp.push(temp[temp.length - 1] + 1);  // 记录当前的最大大雁数量
                    states[states.length - 1] -= 1;  // 减少完成的“quack”计数
                }
            }
        }
    }

    // 输出最大的大雁数量，如果没有找到有效的“quack”，则返回-1
    console.log(dp.length ? Math.max(...dp) : -1);
})();
