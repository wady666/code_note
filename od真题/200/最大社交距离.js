const readline = require('readline');
// 创建 readline 接口实例
const rl = readline.createInterface({
    input: process.stdin,  // 标准输入流
    output: process.stdout  // 标准输出流
});

// 监听 'line' 事件，每次输入一行触发
rl.on('line', (seatNum) => {
    // 再次监听 'line' 事件，获取座位占用和离开的操作序列
    rl.on('line', (str) => {
        // 解析输入的字符串，去掉首尾的括号，分割后转换为数字数组
        const arr = str.slice(1, -1).split(',').map(Number);

        let seat = [];  // 存储已占用的座位
        let ans = -1;  // 下一个人的最佳座位号

        // 遍历操作序列
        for (let sol of arr) {
            if (sol !== 1) {
                // 如果操作不是1，表示有员工离开，移除对应座位号
                seat = seat.filter(s => s !== -sol);
            } else {
                // 如果操作是1，表示有员工进入，需要找到最佳座位
                if (seat.length === 0) {
                    // 如果会议室为空，新员工坐在0号座位
                    ans = 0;
                } else {
                    // 如果会议室不为空，找到最大的空闲区间
                    let max_distance = seat[0];  // 初始化最大距离为第一个座位号
                    ans = 0;  // 初始化最佳座位号为0
                    for (let i = 0; i < seat.length; i++) {
                        // 计算当前座位与下一个座位之间的距离
                        let distance = i === seat.length - 1 ? seatNum - 1 - seat[i] : Math.floor((seat[i + 1] - seat[i]) / 2);
                        if (distance > max_distance) {
                            // 如果当前距离大于最大距离，则更新最大距离和最佳座位号
                            max_distance = distance;
                            ans = i === seat.length - 1 ? seatNum - 1 : seat[i] + distance;
                        }
                    }
                }
                // 如果会议室已满，设置最佳座位号为-1
                if (seat.length === seatNum) {
                    ans = -1;
                } else {
                    // 将新员工的座位号加入到座位列表，并按升序排序
                    seat.push(ans);
                    seat.sort((a, b) => a - b);
                }
            }
        }

        // 输出最后一个操作后的最佳座位号
        console.log(ans);
        // 关闭 readline 接口实例
        rl.close();
    });
});

