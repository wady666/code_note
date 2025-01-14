// 双指针
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let cur = head;
  let pre = null;
  while (cur !== null) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
};

// 递归

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  return reverse(null, head);
};
const reverse = (pre, cur) => {
  if (cur === null) {
    return pre;
  }
  let temp = cur.next;
  cur.next = pre;
  return reverse(cur, temp);
};

// 关键1 用temp进行连接后在执行翻转操作      let temp = cur.next
// cur.next = pre
// pre = cur
// cur = temp
