/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let maxPos = {}
  for (let i = 0; i < s.length; i++) {
      maxPos[s[i]] = i;
  }
  let start = 0
  let scannedCharMaxPos = 0;            // 已扫描的字符中最远的位置
  const ans = []
  for (let i = 0; i < s.length; i++) {
      const curMaxpos = maxPos[s[i]]
      scannedCharMaxPos = Math.max(scannedCharMaxPos, curMaxpos)
      if (i === scannedCharMaxPos) {
          ans.push(i - start + 1);
          start = i + 1
      }
  }
  return ans
};