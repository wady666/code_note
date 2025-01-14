/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) {
        return false
    }
    let map = {
        '{': '}',
        '[': ']',
        '(': ')',
    }
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(map[s[i]])
        } else {
            if (stack.length === 0 || stack[stack.length - 1] !== s[i]) {
                return false
            } else {
                stack.pop()
            }
        }
    }
    return stack.length === 0
};

// 三种不合规的情况 
// 1.遍历结束后还有剩余
// 2.还没遍历完就空了
// 3.栈顶不匹配