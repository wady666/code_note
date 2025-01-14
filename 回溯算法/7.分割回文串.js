/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const ans = []
  const backtracking = (starIndex, path) => {
      if (starIndex === s.length) {
          ans.push(path.slice())
          return
      }
      for (let i = starIndex; i < s.length; i++) {
          // 遍历[startIndex,i]切割出来的子串，判断子串是否回文
          if (isPalindrome(s, starIndex, i)) {
              path.push(s.slice(starIndex, i + 1));
              backtracking(i + 1, path);
              path.pop();
          }

      }
  }
  backtracking(0, [])
  return ans
};
function isPalindrome(s, l, r) {
  while (l < r) {
      if (s[l] != s[r]) {
          return false;
      }
      l++;
      r--;
  }
  return true;
}