// 前缀：不包含尾字母的子串
// 后缀：不包含首字母的子串
// 最长相等前后缀
// 1求next数组 基于最长相等前后缀长度
// 主： aabaabaaf
// 子:  aabaaf
// 求next数组
const getNext = (s) => {
  let j = 0; //前缀末尾
  let next = [0];
  for (let i = 1; i < s.lenth; i++) {
    // 不匹配，回退
    while (j > 0 && s[i] != s[j]) {
      j = next[j - 1];
    }
    // 匹配
    if(s[i] === s[j]){
        j++;
        next[i] = j
    }
  }
  return next
};
// [0,1,0,1,2,0] f不匹配，调回2也就是b下标
