/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const ans = [];
  const backtracking = (startIndex, path) => {
      if (startIndex === s.length || path.length === 4) {
          if (startIndex === s.length && path.length === 4) {
              ans.push(path.slice().join('.'))
          }
          return
      }
      for (let i = startIndex; i < s.length; i++) {
          const ip = s.slice(startIndex, i + 1)
          if (isValidIp(ip)) {
              path.push(ip)
              backtracking(i + 1, path)
              path.pop()
          }
      }
  }
  backtracking(0, [])
  return ans
};

const isValidIp = (ip) => {
  if (ip[0] === '0' && ip.length > 1) {
      return false
  }
  return Number(ip) <= 255
}