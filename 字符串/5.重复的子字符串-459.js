/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    // 移动匹配
    let s1 = (s+s).slice(1,-1)
    return s1.indexOf(s) != -1
};

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    // KMP算法
    if (s.length === 0) {
        return false
    }
    const getNext = (s) => {
        let j = 0; //前缀末尾
        let next = [0];
        for (let i = 1; i < s.length; i++) {
            // 不匹配，回退
            while (j > 0 && s[i] !== s[j]) {
                j = next[j - 1];
            }
            // 匹配
            if (s[i] === s[j]) {
                j++;
            }
            next.push(j)
        }
        return next
    };
    let next = getNext(s);
    // 如果能整除
    if (next[next.length - 1] !== 0 && s.length % (s.length - next[next.length - 1]) === 0) {
        return true;
    }

    return false;
};