const readline = require('readline');
// 创建 readline 接口实例
const rl = readline.createInterface({
    input: process.stdin,  // 标准输入流
    output: process.stdout  // 标准输出流
});

rl.on('line', (budget) => {
    rl.on('line', (chart) => {
        const arr = chart.split(' ').map(Number);
        const dp = new Array(target + 1).fill(0)
        for (let i = 0; i < arr.length; i++) {
            for (let j = i+1; j <= budget ; j++) {
                dp[j] = Math.max(dp[j], dp[j - i] + chart[i])
            }
        }
        console.log(dp[budget])
        // 关闭 readline 接口实例
        rl.close();
    });
});

