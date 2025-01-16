/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let index = 0;
  let ans = 0
  // 大饼干匹配尽量胃口大小孩
  for (let i = 0; i < g.length; i++) {
      while (index < s.length) {
          if (g[i] <= s[index]) {
              index++;
              ans++
              break;
          }
          index++
      }
  }
  return ans
};