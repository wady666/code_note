/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    // 思路：是否有满足正好装满容量为sum/2的背包情况存在
    const sum = nums.reduce((a, b) => a + b)
    if (sum % 2 === 1) return false;
    const target = sum / 2
    const dp = new Array(target + 1).fill(0)
    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
            if (dp[i] === target) {
                return true
            }
        }
    }
    return dp[target] === target
};