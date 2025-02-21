var MyLinkedList = function () {
  this.size = 0;
  this.head = new ListNode(0);
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }
  let cur = this.head;
  for (let i = 0; i <= index; i++) {
    cur = cur.next;
  }
  return cur.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val);
};

MyLinkedList.prototype.addAtTail = function (val) {
  this.addAtIndex(this.size, val);
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) {
    return;
  }
  index = Math.max(0, index);
  this.size++;
  let pred = this.head;
  for (let i = 0; i < index; i++) {
    pred = pred.next;
  }
  let toAdd = new ListNode(val);
  toAdd.next = pred.next;
  pred.next = toAdd;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) {
    return;
  }
  this.size--;
  let pred = this.head;
  for (let i = 0; i < index; i++) {
    pred = pred.next;
  }
  pred.next = pred.next.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// 要点1 删除操作：  pred.next = pred.next.next;
// 要点2 添加操作  let toAdd = new ListNode(val);
// toAdd.next = pred.next;
// pred.next = toAdd;

// 要点3
