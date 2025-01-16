/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let candies = new Array(ratings.length).fill(1)
  // 先比较右比左大的情况
  for (let i = 1; i < ratings.length; i++) {
      if (ratings[i] > ratings[i - 1]) {
          candies[i] = candies[i - 1] + 1
      }
  }
  // 再比较左比右大的情况 从后向前
  for (let i = ratings.length - 2; i >= 0; i--) {
      if (ratings[i] > ratings[i + 1]) {
          // 选出左右遍历时更大的一个 兼容两种情况
          candies[i] = Math.max(candies[i + 1] + 1, candies[i])
      }
  }
  return candies.reduce((a, b) => a + b)
};