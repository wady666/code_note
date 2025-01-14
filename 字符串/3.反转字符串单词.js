/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const ans = []
  let curStr = ''
  for (let i = 0; i < s.length; i++) {
      if (s[i] === ' ') {
          if (curStr !== '') {
              ans.unshift(curStr)
              curStr = ''
          }
      } else {
          curStr += s[i]
      }
  }
  if (curStr !== '') {
      ans.unshift(curStr)
  }
  return ans.join(' ')
};