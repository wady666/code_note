const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 读取用户输入的序列和目标值
rl.on('line', (line1) => {
    rl.on('line', (line2) => {
        
        const nums = line1.split(',').map(Number);
        const target = parseInt(line2);
        rl.close();

        let n = nums.length;
        let left = 0, right = 0, sum = 0, maxLen = -1;

        while (right < n) {
            // 不断扩大窗口，增加右边界
            sum += nums[right];
            right++;

            // 如果当前窗口内的和大于目标值，收缩左边界
            while (sum > target && left < right) {
                sum -= nums[left];
                left++;
            }

            // 检查是否等于目标值，并更新最大长度
            if (sum === target) {
                maxLen = Math.max(maxLen, right - left);
            }
        }

        // 输出结果
        console.log(maxLen);
    });
});
