/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    // 只要遇到今天与昨天的利润是正数，就累加
    profit += Math.max(0, prices[i] - prices[i - 1]);
  }
  return profit;
};
