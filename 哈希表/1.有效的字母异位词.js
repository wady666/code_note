/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) {
      return false
  }
  let table = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
      const index = s[i].charCodeAt(0) - 'a'.charCodeAt(0)
      table[index]++
  }
  for (let i = 0; i < t.length; i++) {
      const index = t[i].charCodeAt(0) - 'a'.charCodeAt(0)
      table[index]--
      if (table[index]<0){
          return false
      }
  }
  return true
};

// 字母相关 考虑用字母表数组 
// charCodeAt方法要记住