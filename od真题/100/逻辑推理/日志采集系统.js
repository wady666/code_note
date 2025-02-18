var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (input) {
    var logs = input.split(" ");

    var totalCount = 0; // 总日志条数
    var maxScore = 0; // 最大积分数
    for (var i = 0; i < logs.length; i++) {
        var logCount = parseInt(logs[i]); // 当前时间点的日志条数
        if (logCount === 0) {
            continue; // 如果当前时间点没有日志条数，则跳过
        }

        totalCount += logCount; // 更新总日志条数

        var score = 0; // 当前时间点的积分数
        for (var j = 0; j <= i; j++) {
            if (totalCount > 100 && i === j) {
                // 如果总日志条数超过100，并且当前时间点是最后一个时间点
                score += logCount - (totalCount - 100); // 计算得分
            } else {
                score += parseInt(logs[j]) - (i - j) * parseInt(logs[j]); // 计算得分
            }
        }

        if (score > maxScore) {
            maxScore = score; // 更新最大积分数
        }

        if (totalCount >= 100) {
            break; // 如果总日志条数达到100条以上，则退出循环
        }
    }

    console.log(maxScore); // 输出最大积分数

    rl.close();
});

