/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0])
  let result = 1
  for (let i = 1; i < points.length; i++) {
      if (points[i][0] <= points[i-1][1]) {
          points[i][1] = Math.min(points[i-1][1],points[i][1])
      }else {
          result++
      }
  }
  return result
};

// 思路 其实就是求各区间交集后的长度

// 相关题目 435无重叠的区间