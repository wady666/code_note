const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputLines = [];
rl.on('line', (input) => {
    inputLines.push(input);
});

rl.on('close', () => {
    // 读取胡杨树的总数N
    const total = parseInt(inputLines[0]);

    // 读取未成活胡杨树的数量M
    const deadCount = parseInt(inputLines[1]);

    // 读取未成活胡杨树的编号列表
    const deadList = inputLines[2].split(' ').map(Number);

    // 读取可以补种的胡杨树数量K
    const k = parseInt(inputLines[3]);

    // 初始化数组，所有树最初都是成活的，1表示成活，0表示未成活
    const nums = new Array(total).fill(1);

    // 根据输入，将未成活的树的位置标记为1
    deadList.forEach(num => {
        nums[num - 1] = 0; // 树的编号从1开始，因此需要减1
    });
    let left = 0, right = 0;
    let max = 0;
    let zero = 0;
    while (right < total) {
        if (nums[right] === 0) {
            zero++
        }
        while (zero > k) {
            if (nums[left] === 0) {
                zero--
            }
            left++
        }
        right++
        max = Math.max(max, right - left)
    }
    console.log(max)
});
