/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const ans = []
  let preArr = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] <= preArr[1]) {
          preArr = [preArr[0],Math.max(preArr[1],intervals[i][1])]
      }else {
          ans.push(preArr)
          preArr = intervals[i]
      }
  }
  ans.push(preArr)
  return ans
};