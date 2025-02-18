const readline = require('readline');

 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

 
rl.on('line', (s) => {
    // 使用正则表达式检查输入字符串是否只包含数字和空格
    // 如果字符串中包含非法字符（非数字或空格），则输出"[]"并退出程序
    if (!/^[0-9\s]+$/.test(s)) {
        console.log("[]");
        rl.close();  // 关闭接口
        return;
    }

    // 将输入字符串按空格分割，并将每个部分转换为整数，存储在数组heights中
    let heights = s.split(' ').map(Number);

    // 初始化两个指针i和j，分别指向相邻的两个小朋友
    let i = 0, j = 1;

    // 遍历数组，调整相邻小朋友的身高顺序以满足"高矮交替"的要求
    while (j < heights.length) {
        // 判断当前两个相邻小朋友的身高是否满足要求
        // 条件解释：如果heights[i] > heights[j]且i是偶数，或者heights[i] < heights[j]且i是奇数
        // 则需要交换heights[i]和heights[j]的值，以符合"高矮交替"的规则
        if (heights[i] !== heights[j] && (heights[i] > heights[j]) !== (i % 2 === 0)) {
            // 交换heights[i]和heights[j]的值
            [heights[i], heights[j]] = [heights[j], heights[i]];
        }

        // 移动指针，检查下一个相邻的小朋友
        i++;
        j++;
    }

    // 将排序后的身高数组转换为字符串，并以空格分隔
    console.log(heights.join(' '));

    
});
