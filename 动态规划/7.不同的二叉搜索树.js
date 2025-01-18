/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let arr = new Array(n+1).fill(0)
    arr[0] = 1
    arr[1] = 1
    for(let i =2;i<=n;i++){
        for(let j =1;j<=i;j++){
            // 以j为头结点 左子树有dp[j-1]种情况 右子树有dp[i-j]种情况 相乘后累加即为结果
            arr[i] += arr[j-1] * arr[i-j]
        }
    }
    return arr[n]
};