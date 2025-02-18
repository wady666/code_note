const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let s1, s2, k;
rl.on('line', (input) => {
  if (!s1) {
    s1 = input.trim();
  } else if (!s2) {
    s2 = input.trim();
  } else {
    k = parseInt(input.trim());
    console.log(findRedundantCover(s1, s2, k));
    rl.close();
  }
});

/**
 * 查找满足条件的子串起始位置
 * @param {string} s1
 * @param {string} s2
 * @param {number} k
 * @returns {number}
 */
function findRedundantCover(s1, s2, k) {
  // 计算s1中每个字符的出现次数
  const s1Count = new Array(26).fill(0);
  for (const c of s1) {
    s1Count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  // 初始化滑动窗口的左右边界、剩余需要匹配的s1字符数和窗口内字符计数数组
  let left = 0, right = 0, s1CharsLeft = s1.length;
  const windowCount = new Array(26).fill(0);

  // 遍历s2字符串
  while (right < s2.length) {
    // 将右边界字符加入窗口计数
    const rightChar = s2.charAt(right);
    windowCount[rightChar.charCodeAt(0) - 'a'.charCodeAt(0)]++;

    // 如果窗口中的字符在s1中出现过，减少剩余需要匹配的字符数
    if (windowCount[rightChar.charCodeAt(0) - 'a'.charCodeAt(0)] <= s1Count[rightChar.charCodeAt(0) - 'a'.charCodeAt(0)]) {
      s1CharsLeft--;
    }

    // 如果窗口长度大于s1长度+k，需要移动左边界
    if (right - left + 1 > s1.length + k) {
      const leftChar = s2.charAt(left);
      // 如果左边界字符在s1中出现过，增加剩余需要匹配的字符数
      if (windowCount[leftChar.charCodeAt(0) - 'a'.charCodeAt(0)] <= s1Count[leftChar.charCodeAt(0) - 'a'.charCodeAt(0)]) {
        s1CharsLeft++;
      }
      // 将左边界字符从窗口计数中移除
      windowCount[leftChar.charCodeAt(0) - 'a'.charCodeAt(0)]--;
      left++;
    }

    // 如果剩余需要匹配的字符数为0，返回满足条件的子串起始位置
    if (s1CharsLeft === 0) {
      return left;
    }

    // 移动右边界
    right++;
  }

  // 如果遍历完s2仍未找到满足条件的子串，返回-1
  return -1;
}
 
