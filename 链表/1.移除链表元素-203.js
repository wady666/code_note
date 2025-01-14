/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let cur = dummyHead
  while (cur.next !== null) {
      if (cur.next.val === val) {
          cur.next = cur.next.next
      }else {
          cur = cur.next
      }
  }
  return dummyHead.next
};

// 要点1 虚拟头结点处理头节点删除问题
// 要点2 删除节点操作：cur.next = cur.next.next
// 要点3 遍历节点操作：cur = cur.next
// 要点4 返回dummyHead.next
