/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let fast = dummyHead
  let slow = dummyHead
  while (n > 0) {
      fast = fast.next
      n--
  }
  while (fast.next !== null){
      fast = fast.next
      slow = slow.next
  }
  slow.next = slow.next.next
  return dummyHead.next
};
// 定义快慢 快先走n步 走到尽头恰好慢就是倒数第N个节点 
