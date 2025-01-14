/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let flag = true;
  let str = "";
  let num = 0;
  let i = 0;
  // 处理剩余长度不够k的情况
  if (s.length % k !== 0) {
    num = k - (s.length % k);
  }
  while (i < s.length + num) {
    // 根据单数K翻转 双数k不翻转 写个flag进行处理
    if (flag) {
      str += s
        .substring(i, i + k)
        .split("")
        .reverse()
        .join("");
    } else {
      str += s.substring(i, i + k);
    }
    flag = !flag;
    i = i + k;
  }
  return str;
};
