/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head
  let fast = head
  while (fast != null) {
      slow = slow.next
      if (fast.next != null) {
          fast = fast.next.next
      } else {
          return null
      }
      if (fast === slow) {
          let ptr = head
          while (ptr !== slow) {
              ptr = ptr.next
              slow = slow.next
          }
          return ptr
      }
  }
  return null
};

// 1.快慢指针，判断是否有相遇 相遇则有环
// 2.相遇时，slow和head到环起点的距离一样

var detectCycle = function(head) {
  const visited = new Set();
  while (head !== null) {
      if (visited.has(head)) {
          return head;
      }
      visited.add(head);
      head = head.next;
  }
  return null;
}
// hash表写法更简便