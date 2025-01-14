/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    // 窗口初始化,队列存储下标
    const queue = []
    for (let i = 0; i < k; i++) {
        const len = queue.length - 1
        // 新加的元素保持递减排序，第一个为最大值
        while (queue.length && nums[i] >= nums[queue[len]]) {
            queue.pop()
        }
        queue.push(i)
    }
    const ans = [queue[0]]
    // 窗口移动
    for (let i = k; i < nums.length; i++) {
        const len = queue.length - 1
        while (queue.length && nums[i] >= nums[queue[len]]) {
            queue.pop()
        }
        queue.push(i)
        // 去除移出窗口内的元素
        if (queue[0] < i - k) {
            queue.unshift()
        }
        ans.push(nums[queue[0]])
    }
    return ans
};