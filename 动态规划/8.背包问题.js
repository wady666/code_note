// 零一背包
// n种物品 每种物品1个 有自己的价值和重量 求x承重的背包能装满的最大价值

// 二维版
// dp[i][j] i为物品 j为背包容量 weight[i]为i的重量 value[i]为i的价值

// 零一背包就分为放和不放的两种情况 取其最大值
// 不放i：
dp[i - 1][j];

// 放i：
dp[i - 1][j - weight[i]] + value[i];

// 递推公式
dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);

// 初始化：需初始化背包容量为0或物品为第一个的情况
dp[i][0] = 0;
dp[0][j] = weight[0] <= j ? values[0] : 0;
// 其他地方初始化为0

// 遍历打印 遍历物品后遍历背包顺序可颠倒

// 一维优化版
// 不放
dp[j];
// 放：
dp[j - weight[i]] + value[i];
// 递推公式
dp[j] = Math.max(dp[j],dp[j - weight[i]] + value[i]);
// 初始化
dp[0] = 0
// 其他初始化0

// 遍历顺序
for(let i =0;i<objNum;i++){
    for(let j = bagweight;j>=weight[i];j--){
        // 倒序遍历保证只添加一次
    }
}
