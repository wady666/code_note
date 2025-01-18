/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    let dp = new Array(n + 1).fill(0)
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j <= i / 2; j++) {
            // 本身dp[i] 拆成两个(i - j) * j 拆成多个dp[i - j] * j
            dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j)
        }
    }
    return dp[n]
};