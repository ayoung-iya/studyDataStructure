// Node(): data와 point인 next, prev를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.prev = null;
  this.next = null;
}

// LinkedList(): head, tail과 length를 가지고 있는 객체
function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}
